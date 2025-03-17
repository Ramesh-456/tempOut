import { Component } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css'],
  providers:[{
    provide: WIDGET,
    useExisting:WidgetOneComponent
  }]
})
export class WidgetOneComponent  implements Widget{
  load= () => {
    console.log("WidgetOneComponent");
    
  }

}
