import { Component, TemplateRef, computed, effect } from '@angular/core';
import { HasPermissionDirective } from '../has-permission.directive';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignalService } from '../service/signal.service';
import { state, style } from '@angular/animations';
import { CustomNgIfDirective } from '../directives/custom-ng-if.directive';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
  providers:[HasPermissionDirective,CustomNgIfDirective],

})
export class CompOneComponent {

  data = {
    color:'green',
    permission:'allow'
  }

  group!:FormGroup;
  constructor(private fb: FormBuilder,public ss:SignalService) { 
    this.group = this.fb.group({
      searchValue:'',
      isLocked:true
      })

      effect(()=>{
        this.data = {color:'',permission:''};
        console.log("It happened   " + this.changedValue())
      })
  }
  submit(){
    console.log(this.group.value);
  }
  getValue(event:any){
    console.log(event);
  }

  changedValue = computed(()=> this.ss.sigValue());

}
