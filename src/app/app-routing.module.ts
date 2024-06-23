import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'to-do-list',
    loadChildren: ()=> import('./features/to-do-list/to-do-list.module').then(m => m.ToDoListModule)
  },
  {
    path:'calculator',
    loadChildren: ()=> import('./features/calculator/calculator.module').then(m => m.CalculatorModule)
  },
   {
     path:'**',
     redirectTo:'home'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
