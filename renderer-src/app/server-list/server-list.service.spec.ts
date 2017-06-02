import { TestBed, inject } from '@angular/core/testing';

import { ServerListService } from './server-list.service';

describe('ServerListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerListService]
    });
  });

  it('should ...', inject([ServerListService], (service: ServerListService) => {
    expect(service).toBeTruthy();
  }));
});
