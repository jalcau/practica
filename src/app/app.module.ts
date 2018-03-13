import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
import { ServicioService } from './providers/servicio.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormBasicoComponent } from './form-basico/form-basico.component';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    FormComponentComponent,
    FormBasicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
