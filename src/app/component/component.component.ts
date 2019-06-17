import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  id_Proceso:number;
  constructor() { }

  ngOnInit() {
    this.id_Proceso=9;
  }

}
