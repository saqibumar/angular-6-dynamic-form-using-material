import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { ControlConfig } from "../../field.interface";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  field: ControlConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}

}
