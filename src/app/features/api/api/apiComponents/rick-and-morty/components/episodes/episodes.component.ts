import { Component } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  episodes:Observable<any>
  page:number = 1
  constructor(private rickService:RickAndMortyService){
    this.rickService.getEpisodes(this.page)
    this.episodes = this.rickService.dataRickAndMorty$
  }

  prevPage(){
    if(this.page > 1){
      this.page -- 
      this.rickService.getEpisodes(this.page);
    }
  }

  nextPage(){
    this.page ++
    this.rickService.getEpisodes(this.page);
  }
}
