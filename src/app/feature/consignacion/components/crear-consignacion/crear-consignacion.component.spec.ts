import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConsignacionComponent } from './crear-consignacion.component';

describe('CrearConsignacionComponent', () => {
  let component: CrearConsignacionComponent;
  let fixture: ComponentFixture<CrearConsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearConsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
