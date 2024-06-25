import { Component } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  public characters:Observable<any>
  page:number = 1
  constructor(private rickService:RickAndMortyService){
    this.rickService.getCharacters(this.page)
    this.characters = this.rickService.dataRickAndMorty$
  }
  
  prevPage(){
    if(this.page > 1){
      this.page -- 
      this.rickService.getCharacters(this.page);
    }
  }

  nextPage(){
    this.page ++
    this.rickService.getCharacters(this.page);
  }
}
