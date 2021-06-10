import { TestBed } from '@angular/core/testing';

import { KruglgaikaService } from './kruglgaika.service';

describe('KruglgaikaService', () => {
  let service: KruglgaikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KruglgaikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
