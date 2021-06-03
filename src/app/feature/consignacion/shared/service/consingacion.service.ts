import { Injectable } from '@angular/core';
import {HttpService} from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Consignacion } from '../model/consignacion';
//import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConsingacionService {
  constructor(protected http: HttpService) { }

  public guardar(consignacion:Consignacion): Observable<number>{
    return this.http.doPost<Consignacion,number> ("http://localhost:8083/consignaciones/consignaciones",consignacion, this.http.optsName('crear consignaciones'));
  }

  public consultar(){
    return this.http.doGet<Consignacion[]>("http://localhost:8083/consignaciones/", this.http.optsName('consultar productos'));
  }




}
