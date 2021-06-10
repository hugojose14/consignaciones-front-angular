import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(protected httpService:HttpService) {
  }

  obtener():Observable<Object>{
   return this.httpService.doGet<Object>('http://localhost:8083/consignaciones/consignaciones/prueba',
    this.httpService.optsName('consultar tmr'))
  }
}
