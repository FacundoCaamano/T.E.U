import { Component } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  loader:boolean = true
  subscription!:Subscription
  errorMessage:Observable<string>
  page:number = 1
  locations:Observable<any>
  totalPages!:number
  name!:string
  type:string = 'all'
  types:Array<string>=['Planet', 'Cluster', 'Space station', 'Microverse', 'TV', 'Resort', 'Fantasy town', 'Dream', 'Dimension', 'unknown', 'Menagerie', 'Game', 'Customs', 'Daycare', 'Dwarf planet (Celestial Dwarf)', 'Miniverse', 'Teenyverse', 'Box', 'Spacecraft', 'Artificially generated world', 'Machine', 'Arcade', 'Spa', 'Quadrant', 'Quasar', 'Mount', 'Liquid', 'Convention', 'Woods', 'Diegesis', 'Non-Diegetic Alternative Reality', 'Nightmare', 'Asteroid', 'Acid Plant', 'Reality', 'Death Star', 'Base', 'Elemental Rings', 'Human', 'Space', 'Hell', 'Police Department', 'Country', 'Consciousness', 'Memory']
  constructor(private rickService:RickAndMortyService){
    this.rickService.getLocations(this.page)
    this.locations = this.rickService.dataRickAndMorty$
    this.errorMessage = this.rickService.errorMessage$
    this.subscription =this.rickService.loader$.subscribe(
      data => this.loader = data
       
    )
    if(this.locations){
      this.locations
      .pipe(take(1))
      .subscribe(
        data => this.totalPages = data.info.pages
      )
    }
  }
  getByName(){
    this.loader = true
    this.rickService.getLocationsByName(this.name)
  }
  getByType(){
    this.loader = true
    this.rickService.getLocationsByType(this.type)
    
  }

  prevPage(){
    if(this.page > 1){
      this.loader = true
      this.page -- 
      this.rickService.getLocations(this.page);
    }
  }

  nextPage(){
    if(this.totalPages > this.page){
      this.loader = true
      this.page ++
      this.rickService.getLocations(this.page);
    }
  }
  clear(){
    this.loader = true
    this.name = ''
    this.rickService.getLocations(this.page)
  }
}
