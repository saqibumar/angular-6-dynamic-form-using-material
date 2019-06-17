import { ControlConfig } from './../../field.interface';
import { AutoCompleteService } from './auto-complete.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject, Observer } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  compId = "AutoCompleteComponent";
  data:any;
  @ViewChild(MatSort) sort: MatSort;
  message:string;
  name:string="there";
  public defaultData:any;
  public currentValue:any;
  strDesc:any;
  selectedData:any;
  outsideVariable:any = '_';

  
  field: ControlConfig;
  group: FormGroup;

  constructor(private _http: HttpClient, 
    private comboSvc:AutoCompleteService,
        private fb: FormBuilder, ) { }

  ngOnInit() {
    console.log(this.field);
    /* if(this.field.Valor){
      let valor = JSON.parse(this.field.Valor);
      console.log(valor);
      this.field.Valor = JSON.stringify(this.field.Valor);
      // this.autoCompleteRef.currentValue = this.field.Valor;
      this.currentValue = this.field.Valor;
      valor.forEach(data=>{
        this.defaultData = data.descripcion;
      });
    } */
    this.comboSvc.changeMessage('IT/Integracion/BuscarPorMunicipioColoniaCP/24/1/1/26/');
    this.comboSvc.currentMessage.subscribe(message => {
      console.log("message = ", message);
      this.strDesc="";
      this.message = message;
      if(this.data){
        this.data.length = 0;
      }
      else{
        this.loadGrid("default","null", this.message);
      }
    }, error=>{
      console.log("ERROR", error);
    });

  }

  getSelectedRecord(event:any){
    console.log(event);
    if(this.data){
      console.log(this.data);
      this.data.forEach(result =>{
        if(event == result.descripcion){
          this.selectedData = "[" + JSON.stringify(result) + "]";
          console.log(this.selectedData);
          this.field.ControlDinamico.Valor = this.selectedData;
        }
      });
    }
  }
  
  loadGrid(event:any | any, filterValue: string, urlApi:string){
    let busqueda:any;
    busqueda = filterValue.replace(/[^\w\s]/gi, '');
    if(event.key==="ArrowDown" || event.key==="ArrowUp"){
      return;
    }
    
    this.urlApi = this.message?this.message:urlApi;
    if(!busqueda){
      busqueda= "null";
    }
    //busqueda = '84921';
if(busqueda.length>2){

  this.getData("_"+busqueda).subscribe(res => {
    if (res.body != null) {
      this.data = res.body.objetoRespuesta;
    }
  }, error => {
    //this.toastr.Error("Error de busqueda", "Error");
  });
 /*  ,()=>{
    //this.toastr.Success("SUCCESS", "Cargado");
    
    //this.isLoading = false;
    return this.data;
  }); */
}
    //return this.stateGroups;
  }
  urlApi:string;
  getData(filterValue: string):Observable<any> {
    let url = ''; //environment.DominioAPI;
    let metodoUrl = this.urlApi+filterValue;
    return this._http.get(url + metodoUrl, {observe:'response'});
  }

  ngAfterViewInit(){
    /* if(!this.urlApi){
      this.urlApi = 'CT/Plantilla/PersonalUbicado/26DST0006K/0/';
    } */
    //this.loadGrid('null', this.urlApi);
    /* setTimeout(() => {  
      console.log("AUTO COMPLETER this.field.Valor", this.currentValue);  
      this.group.get(this.field.NombreControl).setValue(this.currentValue);    
    }); */
    
  }

  restriccionKeyboard(event:any):boolean{
    console.log(event);
    const charCode = (event.which) ? event.which : event.keyCode;
    if(charCode == 46/*  || charCode == 37 || charCode == 39 */){
      return false;
    }
    return true;
  }

  selectColonia(event:any){
    event.target.select();
  }

  getDisplayFn() {
    return (val) => this.displayFn(val);
  }
  
  displayFn(val) {
    if(val){
      return val;
    }else{
      return this.outsideVariable;
    }
  }

}