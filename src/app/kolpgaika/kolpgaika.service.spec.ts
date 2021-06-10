import { TestBed } from '@angular/core/testing';

import { KolpgaikaService } from './kolpgaika.service';

describe('KolpgaikaService', () => {
  let service: KolpgaikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KolpgaikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
