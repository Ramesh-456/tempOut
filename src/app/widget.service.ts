import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  loadWidget !: ()=> void;

   dateFormat = new BehaviorSubject<string>('mediumDate');
  // dateFormat =  signal<string>('shortDate')
  defaultDateFormat$ =this.dateFormat.asObservable();
  setDateFormat(format:string){
    this.dateFormat.next(format)
  }
}
