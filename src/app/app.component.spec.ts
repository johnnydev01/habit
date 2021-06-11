import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColorPickerService } from './services/color-picker.service';
import { TitleService } from './services/title.service';
import { Component } from '@angular/core';

// mockando componente sem MockComponent
@Component({
  // usar mesmo seletor
  selector: 'app-navbar',
  template: '',
})
class MockNavbarComponent {
}
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MockNavbarComponent,
        AppComponent,
      ],
      providers: [ColorPickerService, TitleService]
    
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  

  // it(`should have as title 'habit'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('habit');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to habit!');
  // });
});
