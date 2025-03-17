import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  providers:[
    {provide:NG_VALUE_ACCESSOR,useExisting:ElementComponent,multi:true}
  ]
})
export class ElementComponent implements ControlValueAccessor{
  isLocked!:boolean;
  onValue !:(fn:any)=>void;
  writeValue(obj: any): void {
    this.isLocked = obj
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onValue = fn;
    
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
  setValue(){
    this.isLocked = !this.isLocked
    this.onValue(this.isLocked)

  }

  //  onValue(value: any): void {
  // }

}
