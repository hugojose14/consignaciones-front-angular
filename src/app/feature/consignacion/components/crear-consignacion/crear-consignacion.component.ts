import { Component, OnInit } from '@angular/core';
import {ConsingacionService} from '../../shared/service/consingacion.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Consignacion } from '../../shared/model/consignacion';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-consignacion',
  templateUrl: './crear-consignacion.component.html',
  styleUrls: ['./crear-consignacion.component.scss']
})
export class CrearConsignacionComponent implements OnInit {

  consignacionForm: FormGroup;
  consignacion: Consignacion = new Consignacion();
  consignacionList: Consignacion[];
  listaConsignacion: Observable<Consignacion[]>;
  valorId:number;

  constructor(protected consignacionService:ConsingacionService) {
   }

  ngOnInit(): void {
    this.construirFormularioConsignacion();
  }

  guardar():number{
    this.consignacionService.guardar(this.consignacion).pipe(
    ).subscribe((data)=>{
      Swal.fire({
        icon:'info',
        title:'Guardado correctamente',
        text: `Se guardó la consignación correctamente con id: ${data}`
      })
      this.valorId = data;
    }
    );
    return this.valorId;
  }
  
  limpiarFormulario(){
    this.consignacionForm.reset();
  }

  private construirFormularioConsignacion(){
    this.consignacionForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      cantidadConsignada: new FormControl('',[Validators.required]),
      identificacion: new FormControl('',[Validators.required]),
    })
  }

}
