import { Component, ContentChild } from '@angular/core';
import { WidgetOneComponent } from '../widget-one/widget-one.component';
import { WIDGET } from '../widget';
import { Widget } from '../widget.interface';
import { WidgetService } from '../widget.service';
import { WidgetImplService } from '../widget-impl.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  providers:[{
    provide:WidgetService,
    useClass:WidgetImplService
  }]

})
export class WidgetComponent{

constructor(private widgetService:WidgetService) { }

  @ContentChild(WIDGET , {static:true}) widget!:Widget;
  ngOnInit(){
    this.widget.load();
    this.widgetService.loadWidget();
  }
}
