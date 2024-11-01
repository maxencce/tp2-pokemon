import { TestBed } from '@angular/core/testing';

import { PokeIdService } from './poke-id.service';

describe('PokeIdService', () => {
  let service: PokeIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
