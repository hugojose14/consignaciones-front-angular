import { Component, OnInit } from '@angular/core';
import { Consignacion } from '../../shared/model/consignacion';
import { ConsingacionService } from '../../shared/service/consingacion.service';
import { Observable } from 'rxjs';
import { ComunicarComponentesService } from '@core/services/comunicar-componentes.service';

@Component({
  selector: 'app-listar-consignacion',
  templateUrl: './listar-consignacion.component.html',
  styleUrls: ['./listar-consignacion.component.scss']
})
export class ListarConsignacionComponent implements OnInit {

  mensaje:string
  consignacion: Consignacion = new Consignacion();
  consignacionList: Consignacion[];
  listaConsignacion: Observable<Consignacion[]>;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'direccion','identificacion','telefono','cantidadConsignada', 'accion'];
  constructor(protected consignacionService:ConsingacionService,public comunicacionService:ComunicarComponentesService<Consignacion>) {
   }

  ngOnInit(): void {

    this.listaConsignacion = this.consignacionService.consultar();
    this.listaConsignacion.subscribe(
      response => {
        this.consignacionList = response;
      }
    );
  }

  cambioText(consignacion:Consignacion){
    this.comunicacionService.enviarMensaje( consignacion);
    console.log("cambioText",consignacion);
  }

}
