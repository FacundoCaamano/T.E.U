import { Component } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  public characters:Observable<any>
  page:number = 1
  totalPages!:number
  constructor(private rickService:RickAndMortyService){
    this.rickService.getCharacters(this.page)
    this.characters = this.rickService.dataRickAndMorty$
    if(this.characters){
      this.characters
      .pipe(take(1))
      .subscribe(
        data => this.totalPages= data.info.pages
      )
    }
  }
  
  prevPage(){
    if(this.page > 1){
      this.page -- 
      this.rickService.getCharacters(this.page);
    }
  }

  nextPage(){
    if(this.totalPages > this.page){
      this.page ++
      this.rickService.getCharacters(this.page);
    }
  }
}
