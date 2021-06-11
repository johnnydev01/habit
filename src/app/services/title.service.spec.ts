import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../components/home/home.component';

import { TitleService } from './title.service';

const routes: Routes = [
  { path: 'teste', component: HomeComponent, data: {title: 'Home'}
},
];

describe('TitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes(routes),
      MatCardModule,
      MatTabsModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      BrowserAnimationsModule],
    
    declarations: [HomeComponent]
  }));

  it('should be created', () => {
    const service: TitleService = TestBed.get(TitleService);
    expect(service).toBeTruthy();
  });

  it('should get an title', () => {
    const service: TitleService = TestBed.get(TitleService);
    
    expect(service.getTitle());
  })
});
