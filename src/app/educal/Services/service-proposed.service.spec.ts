import { TestBed } from '@angular/core/testing';

import { ServiceProposedService } from './service-proposed.service';

describe('ServiceProposedService', () => {
  let service: ServiceProposedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProposedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
