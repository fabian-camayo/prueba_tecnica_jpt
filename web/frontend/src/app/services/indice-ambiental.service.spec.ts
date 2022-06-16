import { TestBed } from '@angular/core/testing';

import { IndiceAmbientalService } from './indice-ambiental.service';

describe('IndiceAmbientalService', () => {
  let service: IndiceAmbientalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiceAmbientalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
