import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api/api.component';
import { RickAndMortyComponent } from './api/apiComponents/rick-and-morty/rick-and-morty.component';
import { CharacterComponent } from './api/apiComponents/rick-and-morty/components/character/character.component';
import { LocationComponent } from './api/apiComponents/rick-and-morty/components/location/location.component';
import { EpisodesComponent } from './api/apiComponents/rick-and-morty/components/episodes/episodes.component';
import { HomeRickAndMortyComponent } from './api/apiComponents/rick-and-morty/components/home-rick-and-morty/home-rick-and-morty.component';
import { FormsModule } from '@angular/forms';
import { NasaComponent } from './api/apiComponents/nasa/nasa.component';
import { NeoWsComponent } from './api/apiComponents/nasa/components/neo-ws/neo-ws.component';
import { HomeNasaComponent } from './api/apiComponents/nasa/components/home-nasa/home-nasa.component';
import { APODComponent } from './api/apiComponents/nasa/components/apod/apod.component';
import { InSightComponent } from './api/apiComponents/nasa/components/in-sight/in-sight.component';



@NgModule({
  declarations: [
    ApiComponent,
    RickAndMortyComponent,
    CharacterComponent,
    LocationComponent,
    EpisodesComponent,
    HomeRickAndMortyComponent,
    NasaComponent,
    NeoWsComponent,
    HomeNasaComponent,
    APODComponent,
    InSightComponent,
    
  ],
  imports: [
    CommonModule,
    ApiRoutingModule,
    FormsModule
  ]
})
export class ApiModule { }
