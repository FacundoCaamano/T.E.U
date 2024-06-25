import { Component } from '@angular/core';
import { RickAndMortyService } from './service/rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent {
  constructor(private rickAndMortyService:RickAndMortyService){
    this.rickAndMortyService.getLocations()
  }
}
