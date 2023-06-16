import { TestBed } from '@angular/core/testing';

import { MesasFireService } from './mesas-fire.service';

describe('MesasFireService', () => {
  let service: MesasFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesasFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
