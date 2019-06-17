import { AutoCompleteComponent } from './../auto-complete/auto-complete.component';
import { DateComponent } from './../date/date.component';
import { ButtonComponent } from './../button/button.component';
import { ControlConfig } from './../../field.interface';
import {ComponentFactoryResolver, ComponentRef, Directive,Input,OnInit,ViewContainerRef, Type, ViewChild} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { InputComponent } from "../input/input.component";
import { TextAreaComponent } from '../text-area/text-area.component';
import { SelectComponent } from "../select/select.component";
/* import { ButtonComponent } from "../button/button.component";
import { DateComponent } from "../date/date.component";
import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
import { CheckboxComponent } from "../checkbox/checkbox.component"; */

const componentMapper = {
  1: InputComponent,
  20: TextAreaComponent,
  6: SelectComponent,
  99: ButtonComponent,
  4: DateComponent,
  70: AutoCompleteComponent
  //input: InputComponent,
/*   button: ButtonComponent,
  
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent */
};
@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: ControlConfig;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    if(this.field.ControlDinamico.id_AtributoFlujoTipo==1 
      || this.field.ControlDinamico.id_AtributoFlujoTipo==20 
      || this.field.ControlDinamico.id_AtributoFlujoTipo==6
      || this.field.ControlDinamico.id_AtributoFlujoTipo==99 
      || this.field.ControlDinamico.id_AtributoFlujoTipo==4 
      || this.field.ControlDinamico.id_AtributoFlujoTipo==70 
      ){
    }
    else{
      return;
    }
    //console.log("this.field.type1 = ", this.field.ControlDinamico.id_AtributoFlujoTipo);

    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.ControlDinamico.id_AtributoFlujoTipo]
    );
    // console.log("this.field.grupo y posiscion = ", this.field.ControlDinamico.Grupo, this.field.ControlDinamico.Posicion);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
