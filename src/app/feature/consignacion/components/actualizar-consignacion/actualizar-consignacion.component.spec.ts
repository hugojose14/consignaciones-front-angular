import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarConsignacionComponent } from './actualizar-consignacion.component';

describe('ActualizarConsignacionComponent', () => {
  //let component: ActualizarConsignacionComponent;
  let fixture: ComponentFixture<ActualizarConsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarConsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarConsignacionComponent);
    //component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
