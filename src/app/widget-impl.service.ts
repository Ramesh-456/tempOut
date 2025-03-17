import { Injectable } from '@angular/core';
import { WidgetService } from './widget.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetImplService extends WidgetService{

  constructor() {
    super()
   }
   override loadWidget = ()=>{
      console.log("Load widget Impl");
      
   }
}
