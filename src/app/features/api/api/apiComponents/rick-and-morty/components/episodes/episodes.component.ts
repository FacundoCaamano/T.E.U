import { Component } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  episodes:Observable<any>
  page:number = 1
  totalPages!:number
  constructor(private rickService:RickAndMortyService){
    this.rickService.getEpisodes(this.page)
    this.episodes = this.rickService.dataRickAndMorty$
    if(this.episodes){
      this.episodes
      .pipe(take(1))
      .subscribe(
        data => this.totalPages = data.info.pages
      )
    }
  }

  prevPage(){
    if(this.page > 1){
      this.page -- 
      this.rickService.getEpisodes(this.page);
    }
  }

  nextPage(){
    if(this.totalPages > this.page){
      this.page ++
      this.rickService.getEpisodes(this.page);
    }
  }
}
