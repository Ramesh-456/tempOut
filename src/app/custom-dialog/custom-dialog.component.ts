import { Component, ComponentRef, Inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { SignalService } from '../service/signal.service';
import { TranslatorService } from '../service/translator.service';

@Component({
  selector: 'custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css'],
  providers:[]
})
export class CustomDialogComponent {
  popUpRef!:ComponentRef<any>;
  constructor(private view:ViewContainerRef,  public service: SignalService,public translator:TranslatorService,){}
  ngOnInit(){
    this.service.close.subscribe((event)=>this.popUpRef.destroy())
  }
  showPopUp(){
    this.popUpRef = this.view.createComponent(PopUpComponent);
    this.popUpRef.instance.title = "Hello titile"; // Set input properties
  this.popUpRef.instance.message = "Hello msg";

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        // 3. Remove the PopUpComponent when Esc is pressed
        this.popUpRef.destroy();
      }
    });

  }
  @ViewChild('sampleTemplate') template!:TemplateRef<any>;
  @ViewChild('sampleTemplate2') template2!:TemplateRef<any>;
  showTemplate(){
    this.i++;
this.view.createEmbeddedView(this.template,{data:this.i});
  }
  showTemplate2(){
    this.i++;
this.view.createEmbeddedView(this.template2,{data:this.i});
  }
i = 0;
  removeTemplate(){
    this.view.clear();
      }
  
      changeLanguage(language: string) {
        this.translator.useLanguage(language);
      }
  
}
