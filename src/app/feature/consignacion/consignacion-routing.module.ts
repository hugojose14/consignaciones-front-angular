import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsignacionComponent} from './components/consignacion/consignacion.component';
import {CrearConsignacionComponent} from './components/crear-consignacion/crear-consignacion.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ConsignacionComponent,
    children: [
      {
        path: 'crear',
        component: CrearConsignacionComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsignacionRoutingModule { }
