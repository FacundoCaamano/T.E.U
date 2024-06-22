import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeService } from 'src/app/core/service/mode.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  modoNocturno:Observable<boolean>
  isReversed!:boolean
  constructor(private modeService:ModeService){
    this.modoNocturno = this.modeService.modoNocturno$
    this.modoNocturno.subscribe(
      data => {
        this.isReversed = data
      }
    )
  }

  setMode(){
    this.modeService.setMode()
  }
}
