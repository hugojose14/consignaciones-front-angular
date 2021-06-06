import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ConsignacionComponent } from './consignacion.component';

describe('ConsignacionComponent', () => {
  let component: ConsignacionComponent;
  let fixture: ComponentFixture<ConsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignacionComponent ],
      imports:[
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      providers:[HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
