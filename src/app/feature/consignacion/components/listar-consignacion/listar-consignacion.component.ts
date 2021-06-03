import { Component, OnInit } from '@angular/core';
import { Consignacion } from '@consignacion/shared/model/consignacion';
import { ConsingacionService } from '@consignacion/shared/service/consingacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-consignacion',
  templateUrl: './listar-consignacion.component.html',
  styleUrls: ['./listar-consignacion.component.scss']
})
export class ListarConsignacionComponent implements OnInit {

  consignacion: Consignacion = new Consignacion();
  consignacionList: Consignacion[];
  listaConsignacion: Observable<Consignacion[]>;
  constructor(protected consignacionService:ConsingacionService) {
   }

  ngOnInit(): void {
    this.listaConsignacion = this.consignacionService.consultar();
    this.listaConsignacion.subscribe(
      response => {
        this.consignacionList = response;
        console.log("respuesta endpoints", response);
      }
    );
  }

}
