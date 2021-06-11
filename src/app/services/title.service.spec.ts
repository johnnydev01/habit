import { TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TitleService } from './title.service';


describe('TitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes([])]
  }));

  it('should be created', () => {
    const service: TitleService = TestBed.get(TitleService);
    expect(service).toBeTruthy();
  });
});
