import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

const routes: Routes = [
 
  {path:'',component:CustomDialogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeRoutingModule { }
