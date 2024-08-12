import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  urlNasa = environment.urlNASA
  urlAPOD = environment.APOD_URL
  urlInSight = environment.INSIGHT_URL
  apiKey = environment.nasaKey
  constructor(private httpClient:HttpClient) { }

  getAsteroides(startDate:string, endDate:string){
    return this.httpClient.get(this.urlNasa + `feed?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`)
  }

  APOD(date?: string) {
    let url = this.urlAPOD + '?api_key=' + this.apiKey;
    if (date) {
      url += '&date=' + date;
    }
    return this.httpClient.get(url);
  }

  inSight() {
    return this.httpClient
      .get(this.urlInSight + '?api_key=' + this.apiKey + '&feedtype=json&ver=1.0')
      .pipe(
        map((data: any) => {
          const solKeys = data.sol_keys;
          if (!solKeys || solKeys.length === 0) {
            console.warn('No Sol data available');
            return []; // Devuelve un array vacío si no hay datos disponibles
          }
  
          return solKeys.map((sol: string) => {
            return {
              sol: sol,
              temperature: data[sol]?.AT?.av || 'No data',
              pressure: data[sol]?.PRE?.av || 'No data',
              windSpeed: data[sol]?.HWS?.av || 'No data',
              windDirection: data[sol]?.WD?.most_common?.compass_point || 'No data',
              season: data[sol]?.Season || 'No data',
              firstUTC: data[sol]?.First_UTC || 'No data',
              lastUTC: data[sol]?.Last_UTC || 'No data',
            };
          });
        })
      );
  }
}
