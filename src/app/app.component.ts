import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-forms';

  angularVersion:string;
  
  // list of options to display ion the select
  options: Person[] = [
    {id: "1", name: "Anna", age: "23"}, 
    {id: "2", name: "Dan", age: "16"}, 
    {id: "3", name: "John", age: "45"}, 
    {id: "4", name: "Jamie", age: "19"}, 
    {id: "5", name: "Samantha", age: "32"}, 
  ];
  selectedOptionCompareWith: Person;
  
  constructor() {
    // the selected option as a new object (comparrison will be done by id)
    // [compareWith] used here. Will compare by id field and display
    this.selectedOptionCompareWith = {id: "4", name: "Jamie", age: "19"};
  }

  compareById(o1,o2){
    if(o1 == null || o2 == null){
      return false;
    }
    return o1.id === o2.id;
  }

}

export interface Person{
  id: string;
  name: string;
  age:string;
}