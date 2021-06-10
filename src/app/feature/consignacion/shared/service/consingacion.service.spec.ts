import { TestBed } from '@angular/core/testing';

import { ConsingacionService } from './consingacion.service';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Consignacion } from '../model/consignacion';
import { HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('ConsingacionService', () => {
  let service: ConsingacionService;
  let httpMock: HttpTestingController;
  let apiEndpointConsignaciones = `${environment.urlConsignacion}/consignaciones`;

  beforeEach(() => {

    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsingacionService, HttpService]
    });

    TestBed.configureTestingModule({});
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ConsingacionService);

  });

   it('should be created', () => {
    const consignacionService: ConsingacionService = TestBed.inject(ConsingacionService);
    expect(consignacionService).toBeTruthy();
  }); 

  it('deberia crear consignación ', () => {
    const consignacion = new Consignacion('1','Hugo','Pérez','Cartagena','129443','32393030',20000);

    service.guardar(consignacion).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointConsignaciones);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia listar consignaciones', () => {
    const dummyProductos = [
      new Consignacion('1','Hugo','Pérez','Cartagena','129443','32393030',20000),
       new Consignacion('2','Andrés','Aguas','Sinceljeo','910292','30549303',20000)
    ];
    service.consultar().subscribe(consignaciones => {
      expect(consignaciones.length).toBe(2);
      expect(consignaciones).toEqual(dummyProductos);
    });
    const req = httpMock.expectOne(apiEndpointConsignaciones);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductos);
  });

  it('deberia actualizar consignación',()=>{
    const consignacion = new Consignacion('1','Hugo','Pérez','Cartagena','129443','32393030',20000);
    service.actualizar(1,consignacion).subscribe(()=>{});
    const req = httpMock.expectOne(`${apiEndpointConsignaciones}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(consignacion);
  })

});
