import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicarComponentesService<T> {

  constructor() { }

  body:T

   enviarMensajeSubject = new Subject<any>();

   enviarMensaje(body:T){
     this.body = body;
    this.enviarMensajeSubject.next(body);
   }

   obtenerMensaje():Observable<any> {
    return this.enviarMensajeSubject.asObservable();
   }
}
