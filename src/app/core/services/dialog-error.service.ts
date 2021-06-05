import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DialogErrorService {

  constructor() {}
  
   mostrarMensajeErrorDialog(mensaje):void{
    Swal.fire({
      icon:'error',
      title:'Ha ocurrido un Error inesperado, vuelve a intentarlo',
      text: mensaje
    })
  }
}
