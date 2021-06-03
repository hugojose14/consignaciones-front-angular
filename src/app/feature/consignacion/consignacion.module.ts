import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {CrearConsignacionComponent} from './components/crear-consignacion/crear-consignacion.component';
import { ConsignacionRoutingModule } from './consignacion-routing.module';
import {ConsingacionService} from '../consignacion/shared/service/consingacion.service'
import { SharedModule } from '@shared/shared.module';
import {ConsignacionComponent} from './components/consignacion/consignacion.component';



@NgModule({
  declarations: [CrearConsignacionComponent, ConsignacionComponent],
  imports: [
    CommonModule,
    ConsignacionRoutingModule,
    SharedModule,
 
    
  ],
  providers:[ConsingacionService]
})
export class ConsignacionModule { }
