import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Consignacion } from '@consignacion/shared/model/consignacion';
import { ConsingacionService } from '@consignacion/shared/service/consingacion.service';
import { HttpService } from '@core/services/http.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'  

import { ListarConsignacionComponent } from './listar-consignacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComunicarComponentesService } from '@core/services/comunicar-componentes.service';

describe('ListarConsignacionComponent', () => {
  let component: ListarConsignacionComponent;
  let fixture: ComponentFixture<ListarConsignacionComponent>;
  let consignacionService: ConsingacionService;
  let consignacion:Consignacion;
  let comunicarComponentesService: ComunicarComponentesService<any>;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConsignacionComponent ],
      imports:[CommonModule,HttpClientModule,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule
      ],
      providers:[ConsingacionService, HttpService, ComunicarComponentesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    consignacion = new Consignacion('1','Hugo','Pérez','Cartagena','129443','32393030',20000);
    fixture = TestBed.createComponent(ListarConsignacionComponent);
    component = fixture.componentInstance;
    consignacionService = TestBed.inject(ConsingacionService);
    comunicarComponentesService = TestBed.inject(ComunicarComponentesService);
    consignacionService.consultar().subscribe(data =>{
      data.push(consignacion);
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('deberia llamar lista consignación', ()=>{
    component.ngOnInit();
    spy = spyOn(consignacionService,'consultar');
    consignacionService.consultar();
    expect(consignacionService.consultar).not.toBeNull;
    expect(spy).toHaveBeenCalled();
  })

  it('deberia cambiar texto', ()=>{
    component.cambioText(consignacion);
    spy = spyOn(comunicarComponentesService,'enviarMensaje');
    comunicarComponentesService.enviarMensaje(consignacion);
    expect(spy).toHaveBeenCalled();
  })

});
