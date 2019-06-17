import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  selector:string;
  constructor() { }

  changeMessage(message: string,) {
    this.messageSource.next(message)
  }

}
