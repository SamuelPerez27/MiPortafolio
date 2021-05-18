import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CuerpoComponent } from './component/cuerpo/cuerpo.component';
import { Error404Component } from './component/error404/error404.component';


const routes: Routes = [
   {path: '', component: CuerpoComponent},
   {path: '**',component:Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
