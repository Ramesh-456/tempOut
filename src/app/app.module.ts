import { APP_INITIALIZER, inject, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { HasPermissionDirective } from './has-permission.directive';
import { CardContentDirective, CompTwoComponent } from './comp-two/comp-two.component';
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS, DatePipe, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementComponent } from './element/element.component';
import { SignalImplComponent } from './signal-impl/signal-impl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ElemModule } from './elem/elem.module';
import { RamTemplateDirective } from './directives/ram-template.directive';
import { CustomNgIfDirective } from './directives/custom-ng-if.directive';
import { PopUpComponent } from './pop-up/pop-up.component';
import { InputComponent } from './input/input.component';
import { CustomValueAccessorDirective } from './directives/custom-value-accessor.directive';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ServcompOneComponent } from './servcomp-one/servcomp-one.component';
import { ServcompThreeComponent } from './servcomp-three/servcomp-three.component';
import { ServcompTwoComponent } from './servcomp-two/servcomp-two.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';
import { WidgetService } from './widget.service';
import localeEn from '@angular/common/locales/en'
export const APP_COMFIG = {
  value : "app config"
}

// i want to set


@Injectable({
  providedIn: 'root'
})
export class AppConfig{
public  data  = "App config data"
}

export function loadData(param:AppConfig){
console.log(param);
return () => {
  // Here you can load or set the data in AppConfig
  param.data = "App changed"
  console.log(param);
  
};
}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  // return new TranslateHttpLoader(http, './assets/i18n/parent/', '.json');
  return new TranslateHttpLoader(http, './assets/i18n/parent/', '.json');
}
export const SAM_APP_COMFIG = {
  value : "sample app config"
}

registerLocaleData(localeEn,'en')
@NgModule({

  declarations: [
    AppComponent,
    CompOneComponent,
    HasPermissionDirective,
    CompTwoComponent,RamTemplateDirective,CustomNgIfDirective,
    CardContentDirective,ElementComponent,SignalImplComponent,PopUpComponent,
    CustomValueAccessorDirective,
    ServcompOneComponent,
    ServcompTwoComponent,
    ServcompThreeComponent,
    InputComponent,
    WidgetComponent,
    WidgetOneComponent,
    WidgetTwoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,  ElemModule,HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
        }
        
      })
  ],
  providers:[MessageService,ConfirmationService,
    {provide:'appConfig',useValue:APP_COMFIG},AppConfig,
    {provide: APP_INITIALIZER,useFactory:loadData,multi:true,deps:[AppConfig]},
    DatePipe,
    {
      provide:DATE_PIPE_DEFAULT_OPTIONS,
      // useValue:{
      //   dateFormat:'fullDate'
      // },
     
      useFactory:(widgetService:WidgetService)=>{
        return {
            dateFormat: widgetService.defaultDateFormat$
          }
      },
      deps:[WidgetService]

    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
