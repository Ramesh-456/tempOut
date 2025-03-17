import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';

const routes: Routes = [
  {path:'home',loadChildren:()=> import('../app/prime/prime.module').then(m=>m.PrimeModule)},
  // {path:'',component:CompOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
