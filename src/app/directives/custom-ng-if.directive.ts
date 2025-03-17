import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgIf]'
})
export class CustomNgIfDirective implements OnInit {

  @Input({alias:'appCustomNgIf',required:true}) value:boolean = true;
  constructor(public template:TemplateRef<any>, public viewContainer:ViewContainerRef) {
    
   }
  ngOnInit(): void {
    if(this.value){
      this.viewContainer.createEmbeddedView(this.template)
    }
  }

}
