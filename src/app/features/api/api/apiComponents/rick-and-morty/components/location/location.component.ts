import { Component } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  page:number = 1
  locations:Observable<any>
  totalPages!:number
  constructor(private rickService:RickAndMortyService){
    this.rickService.getLocations(this.page)
    this.locations = this.rickService.dataRickAndMorty$
    if(this.locations){
      this.locations
      .pipe(take(1))
      .subscribe(
        data => this.totalPages = data.info.pages
      )
    }
  }

  prevPage(){
    if(this.page > 1){
      this.page -- 
      this.rickService.getLocations(this.page);
    }
  }

  nextPage(){
    if(this.totalPages > this.page){
      this.page ++
      this.rickService.getLocations(this.page);
    }
  }
}
