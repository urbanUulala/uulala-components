import { TestBed } from '@angular/core/testing';

import { UulalaComponentsService } from './uulala-components.service';

describe('UulalaComponentsService', () => {
  let service: UulalaComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UulalaComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
