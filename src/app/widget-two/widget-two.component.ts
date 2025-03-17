import { Component } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css'],
  providers:[{
    provide: WIDGET,
    useExisting:WidgetTwoComponent
  }]
})
export class WidgetTwoComponent  implements Widget {
  load= () => {
    console.log("WidgetTwoComponent");
    
  }
}
