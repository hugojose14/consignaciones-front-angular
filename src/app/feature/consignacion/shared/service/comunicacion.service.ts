import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  mensaje:string
  constructor() {
   }

   enviarMensajeSubject = new Subject<any>();

   enviarMensaje(mensaje:string){
     this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
   }

   obtenerMensaje():Observable<any> {
    return this.enviarMensajeSubject.asObservable();
   }



}
