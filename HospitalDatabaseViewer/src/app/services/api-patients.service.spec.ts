import { TestBed } from '@angular/core/testing';

import { ApiPatientsService } from './api-patients.service';

describe('ApiPatientsService', () => {
  let service: ApiPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
