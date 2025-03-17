import { Component, ViewContainerRef } from '@angular/core';
import * as $ from 'jquery' 
import { SignalService } from '../service/signal.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  message!:string;
  title!:string;
  color=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`

  ngOnInit(){
    $(document).ready(function(){
      
      document.addEventListener('click', (event:any) => {
        if($('#modal-container-element').find(event.target).length>0 || event.target.id==='modal-container-element' ){
          if($('#popupElement').find(event.target).length==0 && event.target.id!='popupElement'){
            $('#popupElement').addClass('shake');
            setTimeout(()=>{
              $('#popupElement').removeClass('shake');
            },1000)
           }
        }
      
      });
      
    }
    
    )
  }
  constructor(private view:ViewContainerRef,public service:SignalService){}
  close(){
this.service.close.emit('close');
  }
}
