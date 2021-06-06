import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsingacionService } from '@consignacion/shared/service/consingacion.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { CrearConsignacionComponent } from './crear-consignacion.component';

describe('Crear consignación component', () => {
  let component: CrearConsignacionComponent;
  let fixture: ComponentFixture<CrearConsignacionComponent>;
  let consignacionService: ConsingacionService;
  let idValor:number;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearConsignacionComponent ],
      imports:[
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule
      ],
      providers:[ConsingacionService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConsignacionComponent);
    component = fixture.componentInstance;
    consignacionService = TestBed.inject(ConsingacionService);
    spyOn(consignacionService,'guardar').and.returnValue(of(1));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario no es valido', ()=>{
    expect(component.consignacionForm.valid).toBeFalsy();
  })

  it('guardar consignación',(async()=>{
    expect(component.consignacionForm.valid).toBeFalsy();
    component.consignacionForm.controls.nombre.setValue('Hugo');
    component.consignacionForm.controls.apellido.setValue('Pérez');
    component.consignacionForm.controls.direccion.setValue('Barrio españa');
    component.consignacionForm.controls.telefono.setValue('3054705359');
    component.consignacionForm.controls.cantidadConsignada.setValue(parseInt('20000'));
    component.consignacionForm.controls.identificacion.setValue('1001996753');
    expect(component.consignacionForm.valid).toBeTruthy();
    idValor = component.guardar();
    expect(idValor).toBe(1);
  }));

  it('limpiar formuario',()=>{
    component.limpiarFormulario();
    expect(component.consignacionForm.valid).toBeFalsy();
  })

});
