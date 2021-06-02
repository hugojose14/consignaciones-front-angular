import { Injectable } from '@angular/core';
import {HttpService} from '@core/services/http.service';
import { Consignacion } from '../model/consignacion';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ConsingacionService {

  constructor(protected http: HttpService) { }

  public guardar(consignacion:Consignacion){
    this.http.doPost<Consignacion, boolean> (`${environment.consignaciones}/consignaciones`,consignacion, this.http.optsName('crear consignaciones'));
  }

}
