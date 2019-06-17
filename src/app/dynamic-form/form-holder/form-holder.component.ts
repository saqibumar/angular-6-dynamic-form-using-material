import { DynamicFormComponent } from './../components/dynamic-form/dynamic-form.component';
import { Component, ViewChild, Input } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig, ControlConfig } from "../field.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'form-holder',
  templateUrl: './form-holder.component.html',
  styleUrls: ['./form-holder.component.css']
})
export class FormHolderComponent {
  @Input() id_Proceso:number;
  constructor(private http: HttpClient) { }

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig:ControlConfig[];
  show:boolean=false;

  private bs = new BehaviorSubject<any>(null);
  currentBS = this.bs.asObservable();

  ngOnInit(){
    console.log("id_Proceso = ", this.id_Proceso);
    this.getJSON().subscribe(parsedData => {
      if(parsedData)
      {
        //sort data by groups
        parsedData.sort(function (a, b) {
          return a.ControlDinamico.Posicion.localeCompare(b.ControlDinamico.Posicion);
        });
          parsedData.sort(function (a, b) {
          return a.ControlDinamico.Grupo.localeCompare(b.ControlDinamico.Grupo);
        });
        var id={};
        for (let i = 0; i < parsedData.length; i++) {
          let c = parsedData[i].ControlDinamico.Grupo;
          id[c]= id[c] ? ++id[c]: 1; 
        }
        this.regConfig = parsedData;
      }

      //this.regConfig = parsedData;
      // console.log("this.regConfig = ", this.regConfig);
      this.bs.next(this.regConfig);
    }, error=>{
      console.log("ERROR = ", error);
    },()=>{
      console.log("success");
    });
    this.currentBS.subscribe(value => {
      // console.log("value=", value);
      if(value){
        setTimeout(() => {
          if(this.form){
            // console.log("this.form222 = ", this.form);
            this.show=true;
          }
        });
      }
    }); 

  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/json.json");
  }

  
  payload:any;
  submit(value: any) {
    this.payload = value;
    console.log("value = ", value)
  }
}
