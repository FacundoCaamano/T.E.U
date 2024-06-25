import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api/api.component';
import { RickAndMortyComponent } from './api/apiComponents/rick-and-morty/rick-and-morty.component';
import { CharacterComponent } from './api/apiComponents/rick-and-morty/components/character/character.component';
import { LocationComponent } from './api/apiComponents/rick-and-morty/components/location/location.component';
import { EpisodesComponent } from './api/apiComponents/rick-and-morty/components/episodes/episodes.component';
import { HomeRickAndMortyComponent } from './api/apiComponents/rick-and-morty/components/home-rick-and-morty/home-rick-and-morty.component';



@NgModule({
  declarations: [
    ApiComponent,
    RickAndMortyComponent,
    CharacterComponent,
    LocationComponent,
    EpisodesComponent,
    HomeRickAndMortyComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule
  ]
})
export class ApiModule { }
