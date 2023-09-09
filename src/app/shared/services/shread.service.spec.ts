import { TestBed } from '@angular/core/testing';

import { ShreadService } from './shread.service';

describe('ShreadService', () => {
  let service: ShreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
