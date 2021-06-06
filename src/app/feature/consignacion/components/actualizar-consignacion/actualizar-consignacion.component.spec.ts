import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsingacionService } from '@consignacion/shared/service/consingacion.service';
import { HttpService } from '@core/services/http.service';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActualizarConsignacionComponent } from './actualizar-consignacion.component';
import { ComunicarComponentesService } from '@core/services/comunicar-componentes.service';
import { Consignacion } from '@consignacion/shared/model/consignacion';

describe('ActualizarConsignacionComponent', () => {
  let component: ActualizarConsignacionComponent;
  let fixture: ComponentFixture<ActualizarConsignacionComponent>;
  let consignacionService: ConsingacionService;
  let comunicarService:ComunicarComponentesService<Consignacion>; 
  let consignacion:Consignacion;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CommonModule,
        HttpClientModule,RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule],
      declarations: [ ActualizarConsignacionComponent,
         ],
      providers:[ConsingacionService, HttpService, ComunicarComponentesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    consignacion = new Consignacion('1','Hugo','Pérez','Cartagena','129443','32393030',20000);
    fixture = TestBed.createComponent(ActualizarConsignacionComponent);
    component = fixture.componentInstance;
    consignacionService = TestBed.inject(ConsingacionService);
    comunicarService = TestBed.inject(ComunicarComponentesService);
    comunicarService.body = consignacion;
    component.id = 1;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();

  }); 

  it('formulario valido', ()=>{
    expect(component.consignacionForm.valid).toBeTrue();
  })

  it('debería actualizar actualizar',()=>{
    comunicarService.body = consignacion;
    component.id = 1;
    spyOn(consignacionService,'actualizar').and.callThrough();
    const spy = spyOn(component,'actualizar').and.callThrough();
    consignacionService.actualizar(1,consignacion);
    expect(spy);
    expect(spy).toBeDefined();
  })

});
