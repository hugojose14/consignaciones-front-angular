import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {CrearConsignacionComponent} from './components/crear-consignacion/crear-consignacion.component';
import { ConsignacionRoutingModule } from './consignacion-routing.module';
import {ConsingacionService} from '../consignacion/shared/service/consingacion.service'
import { SharedModule } from '@shared/shared.module';
import {ConsignacionComponent} from './components/consignacion/consignacion.component';
import { ListarConsignacionComponent } from './components/listar-consignacion/listar-consignacion.component';
import { ActualizarConsignacionComponent } from './components/actualizar-consignacion/actualizar-consignacion.component';
import { ComunicacionService } from './shared/service/comunicacion.service';



@NgModule({
  declarations: [CrearConsignacionComponent,
     ConsignacionComponent, 
     ListarConsignacionComponent,
     ActualizarConsignacionComponent],
  imports: [
    CommonModule,
    ConsignacionRoutingModule,
    SharedModule,
 
    
  ],
  providers:[ConsingacionService,ComunicacionService]
})
export class ConsignacionModule { }
