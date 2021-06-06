import { TestBed } from '@angular/core/testing';

import { ComunicarComponentesService } from './comunicar-componentes.service';

describe('Servicio para comunicación de componentes', () => {
  let service: ComunicarComponentesService<any>;
  let body:{'nombre':'Hugo', 'apellido':'Pérez'};
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicarComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería enviar mensaje',()=>{
    spy = spyOn(service,'enviarMensaje');
    service.enviarMensaje(body);
    expect(spy).toHaveBeenCalled();
  })

  it('debería recibir mensaje',(()=>{
    spy = spyOn(service,'enviarMensaje');
    service.enviarMensaje(body);
    expect(service.obtenerMensaje()).not.toBeNull();
  }))

});
