import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private url = environment.urlRickAndMOrty

  private _dataRickAndMorty$ = new Subject<any>()
  public dataRickAndMorty$ = this._dataRickAndMorty$.asObservable()

  private _errorMessage$ = new BehaviorSubject<string>('')
  public errorMessage$ = this._errorMessage$.asObservable()

  private _loader$ = new Subject<boolean>()
  public loader$ = this._loader$.asObservable()

  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number) {
    this._errorMessage$.next('')
   

      this.httpClient.get(this.url + 'character?page=' + page).subscribe({
        next: (data) => {
          this._loader$.next(false)
          this._dataRickAndMorty$.next(data)
          
          
        },
        error: () => {
          this._loader$.next(false)
          this._errorMessage$.next('no se encontraron resultados')
        },
        complete:()=> {
          this._loader$.next(false)
        },
      })
    

  }
  getCharacterByName(name: string) {
    this._errorMessage$.next('')
    this.httpClient.get(this.url + 'character?name=' + name).subscribe(
      {
        next: (data) => {
          this._loader$.next(false)
          this._dataRickAndMorty$.next(data)
        },
        error: () => {
          this._loader$.next(false)
          this._errorMessage$.next('no se encontraron resultados')

        }
      }
    )

  }
  getCharactersByStatus(status: string) {
    this._errorMessage$.next('')
    this.httpClient.get(this.url + 'character?status=' + status).subscribe(
      {
        next: (data) => {
          this._loader$.next(false)
          this._dataRickAndMorty$.next(data)
        },
        error: () => {
          this._loader$.next(false)
          this._errorMessage$.next('no se encontraron resultados')
        }
      }
    )
  }

  getEpisodes(page: number) {
    this._errorMessage$.next('')
    this.httpClient.get(this.url + 'episode?page=' + page).subscribe({
      next: (data) => {
        this._loader$.next(false)
        this._dataRickAndMorty$.next(data)

      },
      error: () => {
        this._loader$.next(false)
        this._errorMessage$.next('no se encontraron resultados')
      }
    })
  }
  getEpisodeByEpisode(temporada: string, episode: string) {
    this._errorMessage$.next('')
    this.httpClient.get(this.url + 'episode?episode=' + "S" + temporada + "E" + episode).subscribe({
      next: (data) => {
        this._loader$.next(false)
        this._dataRickAndMorty$.next(data)

      },
      error: () => {
        this._loader$.next(false)
        this._errorMessage$.next('no se encontraron resultados')
      }
    })
  }
  getLocations(page: number) {
    this._errorMessage$.next('')
    this.httpClient.get(this.url + 'location?page=' + page).subscribe({
      next: (data) => {
        this._loader$.next(false)
        this._dataRickAndMorty$.next(data)

      },
      error: () => {
        this._loader$.next(false)
        this._errorMessage$.next('no se encontraron resultados')
      }
    })
  }
  // getAllLocationTypes() {
  //   const firstPage$ = this.httpClient.get<any>(this.url + 'location');

  //   firstPage$.pipe(
  //     mergeMap(firstPage => {
  //       const totalPages = firstPage.info.pages;
  //       const observables = [];

  //       for (let i = 1; i <= totalPages; i++) {
  //         observables.push(this.httpClient.get<any>(this.url + `location?page=${i}`));
  //       }

  //       return forkJoin(observables);
  //     }),
  //     map(pages => {
  //       const allLocations = pages.flatMap(page => page.results);
  //       const allTypes = allLocations.map(location => location.type);
  //       return Array.from(new Set(allTypes)); // Remove duplicates
  //     })
  //   ).subscribe(types => {
  //     console.log(types); // Aquí puedes hacer lo que necesites con los tipos
  //   });
  // }

  getLocationsByName(name: string) {
    this._errorMessage$.next('')
    this.httpClient.get(this.url + 'location?name=' + name).subscribe({
      next: (data) => {
        this._loader$.next(false)
        this._dataRickAndMorty$.next(data)
      },
      error: () => {
        this._loader$.next(false)
        this._errorMessage$.next('no se encontraron resultados')
      }
    })
  }
  getLocationsByType(type: string) {
    this._errorMessage$.next('')
    this.httpClient.get(this.url + 'location?type=' + type).subscribe({
      next: (data) => {
        this._loader$.next(false)
        this._dataRickAndMorty$.next(data)
      },
      error: () => {
        this._loader$.next(false)
        this._errorMessage$.next('no se encontraron resultados')
      }
    })
  }
}
