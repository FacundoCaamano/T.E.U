import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private url = environment.urlRickAndMOrty

  private _dataRickAndMorty$ = new Subject<any>()
  public dataRickAndMorty$ = this._dataRickAndMorty$.asObservable()

  constructor(private httpClient:HttpClient) { }

  getCharacters(page:number){
    this.httpClient.get(this.url + 'character?page=' + page).subscribe({
      next:(data)=>{
        this._dataRickAndMorty$.next(data)
        
      }
    })
  }

  getEpisodes(page:number){
    this.httpClient.get(this.url + 'episode?page=' + page).subscribe({
      next:(data)=>{
        this._dataRickAndMorty$.next(data)
        
      }
    })
  }
  getLocations(page:number){
    this.httpClient.get(this.url + 'location?page=' + page).subscribe({
      next:(data)=>{
        this._dataRickAndMorty$.next(data)
        
      }
    })
  }
}
