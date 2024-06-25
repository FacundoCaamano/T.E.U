import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { RickAndMortyComponent } from './api/apiComponents/rick-and-morty/rick-and-morty.component';
import { CharacterComponent } from './api/apiComponents/rick-and-morty/components/character/character.component';
import { LocationComponent } from './api/apiComponents/rick-and-morty/components/location/location.component';
import { EpisodesComponent } from './api/apiComponents/rick-and-morty/components/episodes/episodes.component';
import { HomeRickAndMortyComponent } from './api/apiComponents/rick-and-morty/components/home-rick-and-morty/home-rick-and-morty.component';

const routes: Routes = [
  {
    path:'',
    component:ApiComponent
  },
  {
    path:'rick-and-morty',
    component:RickAndMortyComponent,
    children:[
      {
        path:'home-rick-and-morty',
        component:HomeRickAndMortyComponent
      },
      {
        path:'character',
        component:CharacterComponent
      },
      {
        path:'location',
        component: LocationComponent
      },
      {
        path:'episodes',
        component: EpisodesComponent
      },
      {
        path:'**',
        redirectTo:'home-rick-and-morty'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
