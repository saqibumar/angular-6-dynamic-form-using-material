import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ControlConfig } from "../../field.interface";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  field: ControlConfig;
  group: FormGroup;
  constructor() {}

  //selectedVal:any[]=[];
  selected= '';
  options:any[]=[];

  ngOnInit() {
    this.options=this.field.ControlDinamico.Repertorio;
    this.selected = JSON.parse(this.field.ControlDinamico.Valor);
    
    this.group.get(this.field.ControlDinamico.NombreControl).valueChanges.subscribe(value => { 
      console.log("value = ", this.field.ControlDinamico.NombreControl , value, this.field.ControlDinamico.Actualiza);
      if(this.field.ControlDinamico.Actualiza==1){
        console.log("REFRESH ANOTHER COMBO");
      }
     })
  }

  compState = (val1: any, val2: any) => {
    val2 = JSON.parse(val2)[0].IdLlaveNegoio;
    return val1 == val2;
  }

}
