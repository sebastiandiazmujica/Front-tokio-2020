import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeportistasComponent} from './Components/pages/deportistas/deportistas.component'
import { DeportistaDetailComponent } from './Components/pages/deportista-detail/deportista-detail.component';
import { LayoutComponent } from './Components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/deportistas',
        pathMatch: 'full'
      },
      {
        path: 'deportistas',
        component: DeportistasComponent
      },
      {
        path: 'deportistas/:id',
        component: DeportistaDetailComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
