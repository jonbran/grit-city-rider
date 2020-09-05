import { TestBed } from '@angular/core/testing';

import { AdeventureTypeService } from './adeventure-type.service';

describe('AdeventureTypeService', () => {
  let service: AdeventureTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdeventureTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
