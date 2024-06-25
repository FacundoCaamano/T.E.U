import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api/api.component';
import { RickAndMortyComponent } from './api/apiComponents/rick-and-morty/rick-and-morty.component';


@NgModule({
  declarations: [
    ApiComponent,
    RickAndMortyComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule
  ]
})
export class ApiModule { }
