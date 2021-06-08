import { Component, OnInit } from '@angular/core';
import { ColorPickerService } from 'src/app/services/color-picker.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private colorPicker: ColorPickerService) { }

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

}
