import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  urlNasa = environment.urlNASA
  apiKey = environment.nasaKey
  constructor(private httpClient:HttpClient) { }

  getAsteroides(startDate:string, endDate:string){
    return this.httpClient.get(this.urlNasa + `feed?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`)
  }
}
