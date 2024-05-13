import { TestBed } from '@angular/core/testing';

import { AssertsService } from './asserts.service';

describe('AssertsService', () => {
  let service: AssertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
