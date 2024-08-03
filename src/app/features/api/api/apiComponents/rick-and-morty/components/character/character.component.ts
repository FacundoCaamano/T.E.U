import { Component, OnDestroy } from '@angular/core';
import { RickAndMortyService } from '../../service/rick-and-morty.service';
import { Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnDestroy {
  
  public characters:Observable<any>
  page:number = 1
  totalPages!:number
  status: string = 'all';
  name!:string
  errorMessage:Observable<string>
  loader:boolean = true
  subscription!:Subscription
  constructor(private rickService:RickAndMortyService){
    
    this.rickService.getCharacters(this.page)
    this.characters = this.rickService.dataRickAndMorty$
    this.errorMessage = this.rickService.errorMessage$
    this.subscription =this.rickService.loader$.subscribe(
      data => this.loader = data
       
    )
    if(this.characters){
      this.characters
      .pipe(take(1))
      .subscribe(
        data => this.totalPages= data.info.pages
      )
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
  prevPage(){
    if(this.page > 1){
      this.loader = true
      this.page -- 
      this.rickService.getCharacters(this.page);
    }
  }

  nextPage(){
    if(this.totalPages > this.page){
      this.loader = true
      this.page ++
      this.rickService.getCharacters(this.page);
    }
  }

  geyByStatus(status:string){
      this.loader = true
      this.page=1
      if(status == 'all'){
        this.rickService.getCharacters(this.page)
      }
      else{
        this.rickService.getCharactersByStatus(status)
      }
      }
   getByName(){
     this.page = 1
     if(this.name != undefined){
      this.loader = true
      this.rickService.getCharacterByName(this.name)
    }
   } 
   clear(){
    this.rickService.getCharacters(this.page)
   }  
}
