import { Component, ContentChild, ContentChildren, Directive, Inject, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HasPermissionDirective } from '../has-permission.directive';
import { CommonModule } from '@angular/common';
import { CustomUserService } from '../service/custom-user.service';
import { APP_COMFIG } from '../app.module';
import { RamTemplateDirective } from '../directives/ram-template.directive';
@Directive({
  selector: '[appCardMainContent]'
})
export class CardContentDirective {
  
}
@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css'],
  providers:[]
})
export class CompTwoComponent implements OnInit{
ngOnInit(): void {
  // console.log(this.cardConten/t)
}
@Input() titleCard:any;
@ContentChildren(RamTemplateDirective) ramTemplate!:QueryList<RamTemplateDirective>;

// @ContentChild(HasPermissionDirective,{read:TemplateRef})
cardContent2!:TemplateRef<any>;
cardContent1!:TemplateRef<any>;


constructor(@Inject('appConfig') private user:any){
console.log(this.user.value)
}
ngAfterViewInit(){
  this.ramTemplate.forEach(each=>{
    switch (each.type)
    {
      case 'sampleContentBody':
       this.cardContent1 = each.template;
        break;
      case 'sampleContent':
        this.cardContent2 = each.template
        break;
      default:
        console.log('default')
    }
  })
}
    
  
}
