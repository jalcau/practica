import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Uno} from'../model/uno';
import {GLOBAL} from '../GLOBAL';

const END_POINT = `$(GLOBAL).END_POINT`;

@Injectable()
export class ServicioService {

  constructor( public http: HttpClient) {
    console.log('TodosService constructor');
   }

   getTodos():Observable<any>{
    let url = END_POINT + '/todos?userId=-1';
    console.log(`TodosService getTodos $(url)`);

    return this.http.get(url);

  }

}
