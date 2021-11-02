import { TestBed } from '@angular/core/testing';

import { HttpGamesService } from './http-games.service';

describe('HttpGamesService', () => {
  let service: HttpGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
