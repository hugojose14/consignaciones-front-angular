import { Injectable } from '@angular/core';
import {HttpService} from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consignacion } from '../model/consignacion';
//import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConsingacionService {
  constructor(protected http: HttpService) { }

  public guardar(consignacion:Consignacion): Observable<number>{
    return this.http.doPost<Consignacion,number> (`${environment.urlConsignacion}/consignaciones`,consignacion, this.http.optsName('crear consignaciones'));
  }

  public consultar():Observable<Consignacion[]>{
    return this.http.doGet<Consignacion[]>(`${environment.urlConsignacion}/consignaciones`, this.http.optsName('consultar consignaciones'));
  }

  public actualizar(id:number,consignacion:Consignacion):Observable<void>{
    return this.http.doPut(`${environment.urlConsignacion}/consignaciones/${id}`, consignacion,this.http.optsName('actualizar consignaciones'));
  }



}
