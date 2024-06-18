import { TestBed } from '@angular/core/testing';

import { ProductSevices } from './product-services.service';

describe('ProductSevices', () => {
  let service: ProductSevices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSevices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
