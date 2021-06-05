import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsignacionComponent} from './components/consignacion/consignacion.component';
import {CrearConsignacionComponent} from './components/crear-consignacion/crear-consignacion.component';
import { CommonModule } from '@angular/common';
import { ListarConsignacionComponent } from './components/listar-consignacion/listar-consignacion.component';
import { ActualizarConsignacionComponent } from './components/actualizar-consignacion/actualizar-consignacion.component';

const routes: Routes = [
  {
    path: '',
    component: ConsignacionComponent,
    children: [
      {
        path: 'crear',
        component: CrearConsignacionComponent
      },
      {
        path:'listar',
        component: ListarConsignacionComponent
      },
      {
        path:'actualizar/:id',
        component:ActualizarConsignacionComponent,
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsignacionRoutingModule { }
