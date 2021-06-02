import { Component, OnInit } from '@angular/core';
import {ConsingacionService} from '../../shared/service/consingacion.service'
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-crear-consignacion',
  templateUrl: './crear-consignacion.component.html',
  styleUrls: ['./crear-consignacion.component.scss']
})
export class CrearConsignacionComponent implements OnInit {

  consignacionForm: FormGroup;
  constructor(protected consignacionService:ConsingacionService) { }

  ngOnInit(): void {
    this.construirFormularioConsignacion();    
  }

  crear(){
    this.consignacionService.guardar(this.consignacionForm.value);
  }

  private construirFormularioConsignacion(){
    
  }

}
