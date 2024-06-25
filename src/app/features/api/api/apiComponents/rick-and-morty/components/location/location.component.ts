import { Component } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  page:number = 1
  locations:Observable<any>
  constructor(private rickService:RickAndMortyService){
    this.rickService.getLocations(this.page)
    this.locations = this.rickService.dataRickAndMorty$
  }

  prevPage(){
    if(this.page > 1){
      this.page -- 
      this.rickService.getLocations(this.page);
    }
  }

  nextPage(){
    this.page ++
    this.rickService.getLocations(this.page);
  }
}
