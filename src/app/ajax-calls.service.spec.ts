import { TestBed } from '@angular/core/testing';

import { AjaxCallsService } from './ajax-calls.service';

describe('AjaxCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjaxCallsService = TestBed.get(AjaxCallsService);
    expect(service).toBeTruthy();
  });
});
