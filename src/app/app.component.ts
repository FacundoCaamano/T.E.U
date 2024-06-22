import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeService } from './core/service/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 't.e.u';
  menuOpen:boolean = false
  width= window.innerWidth
  darkMode!:Observable<boolean>
  constructor(private modeService:ModeService){
   this.darkMode = this.modeService.modoNocturno$
    
  }

  stateMenu(){
    this.menuOpen = !this.menuOpen
    console.log(this.menuOpen);
    
  }
}
