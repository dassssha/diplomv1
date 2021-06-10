import { TestBed } from '@angular/core/testing';

import { GostsbyrtService } from './gostsbyrt.service';

describe('GostsbyrtService', () => {
  let service: GostsbyrtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GostsbyrtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
