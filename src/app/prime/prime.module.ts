import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { ElemModule } from '../elem/elem.module';
import { CustomDiaOneComponent } from '../custom-dia-one/custom-dia-one.component';
import { CustomDiaTwoComponent } from '../custom-dia-two/custom-dia-two.component';
// import { PrimeRoutingModule } from './prime-routes';
import { PrimeRoutingModule } from './prime-routes';
import { ValueAccComponent } from '../value-acc/value-acc.component';
import { SelectComponent } from '../select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslatorService } from '../service/translator.service';
import { ParentComponent } from '../parent/parent.component';
import { CardComponent } from './Card.component';
import { CardContentComponent } from './card-content/card-content.component';
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/child/', '.json');
}
@NgModule({
  declarations: [CustomDialogComponent,CustomDiaOneComponent,CustomDiaTwoComponent,
    ValueAccComponent,SelectComponent,
    ParentComponent,
    CardComponent,
    CardContentComponent
  ],
  imports: [
    
    CommonModule,ElemModule,PrimeRoutingModule,ReactiveFormsModule,HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
        }
        
      })
  ],
  exports:[CustomDialogComponent],
  // providers:[TranslatorService]
  
})
export class PrimeModule { }
