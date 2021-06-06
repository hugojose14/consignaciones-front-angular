import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {CrearConsignacionComponent} from './components/crear-consignacion/crear-consignacion.component';
import { ConsignacionRoutingModule } from './consignacion-routing.module';
import { SharedModule } from '@shared/shared.module';
import {ConsignacionComponent} from './components/consignacion/consignacion.component';
import { ListarConsignacionComponent } from './components/listar-consignacion/listar-consignacion.component';
import { ActualizarConsignacionComponent } from './components/actualizar-consignacion/actualizar-consignacion.component';



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
  providers:[]
})
export class ConsignacionModule { }
