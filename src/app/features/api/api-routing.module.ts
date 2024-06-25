import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { RickAndMortyComponent } from './api/apiComponents/rick-and-morty/rick-and-morty.component';

const routes: Routes = [
  {
    path:'',
    component:ApiComponent
  },
  {
    path:'api1',
    component:RickAndMortyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
