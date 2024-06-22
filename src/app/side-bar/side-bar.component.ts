import { Component } from '@angular/core';
import { ModeService } from '../core/service/mode.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  darkMode!:Observable<boolean>
  constructor(private modeService:ModeService){
   this.darkMode = this.modeService.modoNocturno$
    
  }
}
