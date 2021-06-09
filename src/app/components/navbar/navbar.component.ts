import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColorPickerService } from 'src/app/services/color-picker.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private colorPicker: ColorPickerService,
              private title: Title) { }

  ngOnInit() {
  }

  setColorTheme(color: string){
    let colorTheme = '';
    
    if(color !== ''){
      colorTheme = `-${color}`
    }
    this.colorPicker.setColorClass(
      `app-theme${colorTheme}`
      )
    }

    getColorTheme(){
      return this.colorPicker.getColorClass().value; 
    }
    getTitle(){
      return this.title.getTitle();
    }

    getColorHeader(){
      return `header-${this.getColorTheme()}`;
    }

}
