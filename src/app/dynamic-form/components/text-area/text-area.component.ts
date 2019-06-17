import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ControlConfig } from "../../field.interface";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  field: ControlConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
  }


}
