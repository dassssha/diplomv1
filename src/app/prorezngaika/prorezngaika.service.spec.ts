import { TestBed } from '@angular/core/testing';

import { ProrezngaikaService } from './prorezngaika.service';

describe('ProrezngaikaService', () => {
  let service: ProrezngaikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProrezngaikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
