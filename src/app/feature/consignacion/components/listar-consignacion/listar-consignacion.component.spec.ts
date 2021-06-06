import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConsignacionComponent } from './listar-consignacion.component';

describe('ListarConsignacionComponent', () => {
  //let component: ListarConsignacionComponent;
  let fixture: ComponentFixture<ListarConsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConsignacionComponent);
    //component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
