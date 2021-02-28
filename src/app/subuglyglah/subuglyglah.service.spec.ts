import { TestBed } from '@angular/core/testing';

import { SubuglyglahService } from './subuglyglah.service';

describe('SubuglyglahService', () => {
  let service: SubuglyglahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubuglyglahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
