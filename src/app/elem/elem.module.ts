import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,ConfirmDialogModule,ToastModule
  
  ],exports:[ButtonModule,ConfirmDialogModule,ToastModule]
})
export class ElemModule { }
