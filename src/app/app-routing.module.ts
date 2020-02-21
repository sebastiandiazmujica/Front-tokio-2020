import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeportistasComponent} from './Components/pages/deportistas/deportistas.component'


const routes: Routes = [
  {
    path:"",
    component: DeportistasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
