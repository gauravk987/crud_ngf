import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { Cp1Component } from './cp1/cp1.component';
const routes: Routes = [
  {path:'cp1',component:Cp1Component},
  {path:'add',component:AddComponent},
  { path: '', redirectTo: '/cp1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
