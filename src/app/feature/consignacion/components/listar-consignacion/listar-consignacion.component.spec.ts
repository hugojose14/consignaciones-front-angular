import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Consignacion } from '@consignacion/shared/model/consignacion';
import { ConsingacionService } from '@consignacion/shared/service/consingacion.service';
import { HttpService } from '@core/services/http.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'  
import { RouterTestingModule } from '@angular/router/testing';
import { ListarConsignacionComponent } from './listar-consignacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComunicarComponentesService } from '@core/services/comunicar-componentes.service';
import { of } from 'rxjs';

describe('ListarConsignacionComponent', () => {
  let component: ListarConsignacionComponent;
  let fixture: ComponentFixture<ListarConsignacionComponent>;
  let consignacionService: ConsingacionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConsignacionComponent ],
      imports:[CommonModule,HttpClientModule,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        RouterTestingModule
      ],
      providers:[ConsingacionService, HttpService, ComunicarComponentesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const consignacionList:Consignacion[] =[ new Consignacion('1','Hugo','Pérez','Cartagena','129443','32393030',20000)];
    fixture = TestBed.createComponent(ListarConsignacionComponent);
    component = fixture.componentInstance;
    consignacionService = TestBed.inject(ConsingacionService);
    spyOn(consignacionService,'consultar').and.returnValue(of(consignacionList));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('deberia llamar lista consignación', ()=>{
    expect(component.consignacionList.length).toBe(1);
  })

});
