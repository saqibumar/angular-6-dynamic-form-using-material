import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ControlConfig } from "../../field.interface";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  field: ControlConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
    // console.log("group = ", 
    //   this.group.get(this.field.ControlDinamico.NombreControl));
    // console.log("position and group = ", this.field.ControlDinamico.Posicion, this.field.ControlDinamico.Grupo)
    // document.getElementsByTagName("app-input")[0].setAttribute("class","col-md-6");
  }
}
