import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private _modoNocturno$ = new BehaviorSubject<boolean>(false)
  public modoNocturno$ = this._modoNocturno$.asObservable()
  constructor() {
     let mode = localStorage.getItem('mode')
     this._modoNocturno$
     .pipe(take(1))
     .subscribe(
      data => {
        if(mode == 'false'){
          this._modoNocturno$.next(false)
        }
        if(mode == 'true'){
          this._modoNocturno$.next(true)
        }
      }
     )
   }

  setMode(){
    this._modoNocturno$
    .pipe(take(1))
    .subscribe({
      next:(data)=>{
        if(data == true){
          this._modoNocturno$.next(false)
          localStorage.setItem('mode', 'false')
        }
        if(data == false){
          this._modoNocturno$.next(true)
          localStorage.setItem('mode', 'true')
        }
      }
    })
  
  }
}
