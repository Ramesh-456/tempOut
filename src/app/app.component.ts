import { Component, effect, untracked } from '@angular/core';
import { SignalService } from './service/signal.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TranslatorService } from './service/translator.service';
import { CustomUserService } from './service/custom-user.service';
import { AppConfig } from './app.module';
import { FormBuilder, FormControl } from '@angular/forms';
import { WidgetService } from './widget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RouterOutlet, RouterLink, RouterLinkActive],
  
})
export class AppComponent {
  group = this.fb.group({
    hello:new FormControl<any>("hellos"),
    input:['234']
  })
  // hello = new FormControl(["Hello"]);
  constructor(public ss:SignalService,
    private translator:TranslatorService,private ser:CustomUserService,
    private appConfig:AppConfig,private fb:FormBuilder,public wid:WidgetService
  ){
    effect(()=>{
      this.value = untracked(()=>this.ss.sigValue()) ;
    })
  }
  title = 'tempOut';
  

  value = ''
  ngOnInit(){

    this.data = this.data.map(each=>{
      if(each.label==='submit'){
        each['command']=()=>{
          this.submit(each);
        }
      }
      if(each.label==='reset'){
        each['command']=()=>{
          this.reset(each);
        }
       
      }
      if(each.label==='cancel'){
        each['command']=()=>{
          this.cancel(each);
        }
      }
      return each;
    })
   
    

    console.log(
      this.appConfig.data   );
    
    window.addEventListener('scroll',()=>{
      var ele = document.getElementById('wave');
      if(window.scrollY/100 >= 1){
        if(ele){
          ele.style.scale = `${window.scrollY/100}`;
        }
      }
     
      // console.log(window.scrollX)
    })
  }
  changeLanguage(language: string) {
    this.translator.useLanguage(language);
  }
  change(){
    this.ser.value = "Changed"
  }
  submit(data:any){
    console.log(data)
  }
  reset(data:any){
    console.log(data)
  }
  cancel(data:any){
    console.log(data)
  }

  data :any[]= [
    {
      label:"submit",
      
    },
    {
      label:"cancel",
      
    },
    {
      label:"reset",
      
    }
  ]
  changeVal(){
this.group.controls['hello'].patchValue(["Hello","ramesh"])
// console.log(this.hello.value);

  }
  disable(){
    // this.hello.disable();
  }
  resetVal(){
    this.group.reset();
    // console.log(this.hello.value);
  }

  currentDate = new Date();
 
}
