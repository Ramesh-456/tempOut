import { Component, Input, forwardRef, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR ,ControlValueAccessor} from '@angular/forms';
import { CustomValueAccessorDirective } from '../directives/custom-value-accessor.directive';

type InputType = 'text' | 'number' | 'email' | 'password';
const INPUT = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=>InputComponent) ,
  multi: true
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  
  providers: [
    INPUT
  ],
})
export class InputComponent implements ControlValueAccessor {
  writeValue(obj: any | any[]): void {
    if(obj instanceof Array){
      this.items.set(obj)
    }
    else{
      this.items.set(obj)
    }
    console.log(obj);
    
    
    
  }
  registerOnChange(fn: any): void {
    console.log("fn ",fn);
  }
  registerOnTouched(fn: any): void {
    console.log("fn ",fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log("isDisabled ",isDisabled);
  }
  // @Input() inputId = '';
  // @Input() label = '';
  // @Input() type: InputType = 'text';
  // @Input() customErrorMessages: Record<string, string> = {};
  items = signal<any | any[]>([]);
}
