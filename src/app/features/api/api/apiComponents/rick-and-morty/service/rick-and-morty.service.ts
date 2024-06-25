import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private url = environment.urlRickAndMOrty


  constructor(private httpClient:HttpClient) { }

  getCharacters(){
    this.httpClient.get(this.url + 'character').subscribe({
      next:(data)=>{
        console.log(data);
        
      }
    })
  }

  getEpisodes(){
    this.httpClient.get(this.url + 'episode').subscribe()
  }
  getLocations(){
    this.httpClient.get(this.url + 'location').subscribe({
      next:(data)=>{
        console.log(data);
        
      }
    })
  }
}
