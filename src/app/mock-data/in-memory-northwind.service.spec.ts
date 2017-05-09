import { TestBed, inject } from '@angular/core/testing';

import { InMemoryNorthwindService } from './in-memory-northwind.service';

describe('InMemoryNorthwindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryNorthwindService]
    });
  });

  it('should ...', inject([InMemoryNorthwindService], (service: InMemoryNorthwindService) => {
    expect(service).toBeTruthy();
  }));
});
