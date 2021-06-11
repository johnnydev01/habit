import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerService } from '../../services/color-picker.service';
import { NavbarComponent } from './navbar.component';



class MockColorPickerService {
  getColorClass(): string{return 'app-theme'}
  setColorClass(className: string): void{
    localStorage.setItem('color-picker', className);
  }

}

describe('NavbarComponent', () => {
  let injector: TestBed
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let colorPickerService: ColorPickerService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [Title,{
        provide: ColorPickerService,
        useClass: MockColorPickerService
      }],
      imports: [
                BrowserAnimationsModule,
                MatButtonModule,
                MatMenuModule,
                MatToolbarModule,
                MatIconModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    colorPickerService =  injector.get(ColorPickerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
