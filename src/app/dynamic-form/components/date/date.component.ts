import { FormGroup } from '@angular/forms';
import { ControlConfig } from '../../field.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  field: ControlConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
