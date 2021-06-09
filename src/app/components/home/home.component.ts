import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      trigger: ['']
    })
  }

}
