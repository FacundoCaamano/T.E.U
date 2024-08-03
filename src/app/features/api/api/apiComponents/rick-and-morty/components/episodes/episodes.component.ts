import { Component } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  episodes:Observable<any>
  temporada!:number
  episode!:number
  page:number = 1
  totalPages!:number
  errorMessage:Observable<string>
  loader:boolean = true
  subscription!:Subscription
  constructor(private rickService:RickAndMortyService){
    this.loadEpisodes()
    this.episodes = this.rickService.dataRickAndMorty$
    this.errorMessage = this.rickService.errorMessage$
    this.subscription =this.rickService.loader$.subscribe(
      data => this.loader = data
       
    )
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
      this.loader = true
      this.page -- 
      this.rickService.getEpisodes(this.page);
    }
  }

  nextPage(){
    if(this.totalPages > this.page){
      this.loader = true
      this.page ++
      this.rickService.getEpisodes(this.page);
    }
  }
  search(){
    this.loader = true
    let temporada= this.temporada.toString()
    let episode = this.episode.toString()

    if(temporada.length == 1){
      temporada = '0' + temporada
    }
    if(episode.length == 1){
      episode = '0' + episode
    }
    this.rickService.getEpisodeByEpisode(temporada,episode)
    
    
  }

  loadEpisodes(){
   
    this.rickService.getEpisodes(this.page)
  }
}
