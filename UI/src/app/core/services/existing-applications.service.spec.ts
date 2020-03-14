import { TestBed } from '@angular/core/testing';

import { ExistingApplicationsService } from './existing-applications.service';

describe('ExistingApplicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExistingApplicationsService = TestBed.get(ExistingApplicationsService);
    expect(service).toBeTruthy();
  });
});
