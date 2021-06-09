import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColorPickerService } from './services/color-picker.service';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  themeClass;

  constructor(private colorPicker: ColorPickerService,
              private titleService: TitleService,
              ){}

  ngOnInit(){
    this.themeClass = this.colorPicker.getColorClass();
    this.titleService.getTitle();
  }

}
