import { TestBed } from '@angular/core/testing';

import { ConsingacionService } from './consingacion.service';

describe('ConsingacionService', () => {
  let service: ConsingacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsingacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
