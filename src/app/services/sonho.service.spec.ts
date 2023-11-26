import { TestBed } from '@angular/core/testing';

import { SonhoService } from './sonho.service';

describe('SonhoService', () => {
  let service: SonhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SonhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
