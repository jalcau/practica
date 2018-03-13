import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {ServicioService,} from '../providers/servicio.service'
import {Uno} from '../model/uno'
@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  todos : Uno[];
  nombre:string;
  constructor( public servicioService:ServicioService ) {
    console.log('TodosComponent constructor');
    this.todos = [];
}
  ngOnInit() {
  }

  cargarTareas(){
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.servicioService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }
  mapeo( result : any ){

    let todo:Uno;
    result.forEach(el => {
        todo = new Uno( el.title );
        todo.id = el.id;
        todo.idUser = el.userId;
        todo.completed = el.completed;

        this.todos.push(todo);
    });

  }

}
