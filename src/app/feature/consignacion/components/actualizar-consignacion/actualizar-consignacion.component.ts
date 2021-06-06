import { Component, OnInit } from '@angular/core';
import { Consignacion } from '../../shared/model/consignacion';
import { ConsingacionService } from '../../shared/service/consingacion.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { ComunicarComponentesService } from '@core/services/comunicar-componentes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-consignacion',
  templateUrl: './actualizar-consignacion.component.html',
  styleUrls: ['./actualizar-consignacion.component.scss']
})
export class ActualizarConsignacionComponent implements OnInit {

  consignacion:Consignacion = new Consignacion();
  id:number;
  mensaje:string;
  consignacionForm: FormGroup;

  constructor(protected consignacionService:ConsingacionService,private route: ActivatedRoute,
    protected comunicacionService:ComunicarComponentesService<Consignacion>) { 
    }

  ngOnInit() {
    this.consignacion =  this.comunicacionService.body;
    this.route.paramMap.subscribe(params =>{
    this.id = parseInt(params.get('id'))});
    this.construirFormularioConsignacion();
  }

  actualizar(){
    this.consignacionService.actualizar(this.id,this.consignacion).subscribe(()=>{
      Swal.fire({
        icon:'info',
        title:'Actualizado correctamente',
        text: 'Se actualizó la consignación correctamente'
      })
    });

  }

   construirFormularioConsignacion(){
    this.consignacionForm = new FormGroup({
      nombre: new FormControl(this.consignacion.nombre,[Validators.required]),
      apellido: new FormControl(this.consignacion.apellido,[Validators.required]),
      direccion: new FormControl(this.consignacion.direccion,[Validators.required]),
      telefono: new FormControl(this.consignacion.telefono,[Validators.required]),
      cantidadConsignada: new FormControl(this.consignacion.cantidadConsignada,[Validators.required]),
      identificacion: new FormControl(this.consignacion.identificacion,[Validators.required]),
    })
  }
}
