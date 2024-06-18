import { TestBed } from '@angular/core/testing';

import { CategorySevicesService } from './category-sevices.service';

describe('CategorySevicesService', () => {
  let service: CategorySevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
