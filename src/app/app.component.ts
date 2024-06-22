import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 't.e.u';
  menuOpen:boolean = false
  width= window.innerWidth
  constructor(){
    console.log(this.width);
    
  }

  stateMenu(){
    this.menuOpen = !this.menuOpen
    console.log(this.menuOpen);
    
  }
}
