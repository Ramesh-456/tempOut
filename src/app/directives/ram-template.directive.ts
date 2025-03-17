import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ramTemplate]'
})
export class RamTemplateDirective {

  @Input('ramTemplate') name!: string;

  constructor(public template:TemplateRef<any>) {
   }
  

  get type(){
    return this.name;
  }

}
