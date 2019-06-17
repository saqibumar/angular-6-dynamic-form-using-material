import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlConfig } from './../../field.interface';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  exportAs: "dynamicForm",
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: ControlConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
isDis:boolean=false;
  form: FormGroup;

  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createControl();
    this.distributeControls(this.fields);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }
  validations:any=[];
  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      // console.log("field position = ", field.ControlDinamico.Grupo, '>>', field.ControlDinamico.Posicion);
      if (field.ControlDinamico.id_AtributoFlujoTipo === 99) return;
      
      if(field.ControlDinamico.EsObligatorio){
        field.ControlDinamico.validations=[
          {
            name: "required",
            validator: Validators.required,
            message: field.ControlDinamico.EtiquetaPresentacion + " required"
          }/* ,
          {
            name: "pattern",
            validator: Validators.pattern("^[a-zA-Z]+$"),
            message: "Accept only text"
          } */
        ];
      }
      /* const control = this.fb.control(
        field.ControlDinamico.Valor,
        this.bindValidations(this.validations || [])
      ); */
      const control = this.fb.control(
        field.ControlDinamico.Valor,
        this.bindValidations(field.ControlDinamico.validations || [])
      );
      
      group.addControl(field.ControlDinamico.NombreControl, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    //console.log("validations = ", this.validations);
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  classRow:string;
  classCol:string;
  group=1;
  numOfCtrls:any;
  bootstrapCols:any="auto";
  counter:number=0;
  controlGroup:any=1;
  groupId:any={};
  len:number=0;
  distributeControls(parsedData:ControlConfig[]){
    console.log("parsedData = ", parsedData);
    var id={};
    for (let i = 0; i < parsedData.length; i++) {
      let c = parsedData[i].ControlDinamico.Grupo;
      id[c]= id[c] ? ++id[c]: 1; 
    }
    //this.groupId = id;
    //setTimeout(() => {      
      Object.assign(this.groupId, id);
      // console.log("this.groupId = ", this.groupId);
      var keys = Object.keys(this.groupId);
      this.len = keys.length;
      // console.log("len = ", this.len);
    //}, 0);
    parsedData.forEach(element => {
      //console.log("POSITION>>>",element.ControlDinamico);
      //SAQIB below is the logic for positioning
      this.controlGroup = element.ControlDinamico.Grupo;
      this.counter++;
      if(this.group !== this.controlGroup)
      {
        this.counter=1;
        this.group = this.controlGroup;
        // console.log("NEW ROW here", this.group);
      }
      
      let controlPosition = element.ControlDinamico.Posicion;
      this.numOfCtrls = id[this.group];
      if(12%(id[this.group])<5 && 12%(id[this.group])>0){
        this.bootstrapCols = Math.round(12/(id[this.group]));
        if(this.counter == id[this.group]){
          this.bootstrapCols = this.bootstrapCols+12%(id[this.group]);
        }
      }
      else{
        this.bootstrapCols = 12/(id[this.group]);
      }
    });
  }
}
