import { Component, OnDestroy } from '@angular/core';
import { NasaService } from '../../service/nasa.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-neo-ws',
  templateUrl: './neo-ws.component.html',
  styleUrls: ['./neo-ws.component.scss']
})
export class NeoWsComponent implements OnDestroy {
  neoData: any;
  
  inputStart!:string
  inputEnd?:string
  
  startDate:any;
  endDate:any

  loader!:boolean

  subscription = new Subscription()
  constructor(private nasaService:NasaService){
    this.loader = true
     this.subscription.add(this.nasaService.getAsteroides('2015-09-10','2015-09-14').subscribe(
       (data:any) =>{
        this.loader = false
        this.startDate = data.near_earth_objects['2015-09-10']
        this.endDate = data.near_earth_objects['2015-09-14']      

        this.inputStart = '2015-09-10'
        this.inputEnd = '2015-09-14'
       } 
     ))
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }

  inputsDate(){
    this.loader = true
    if(this.inputStart){
      let end
      let endString:any

      if(!this.inputEnd){
        end = new Date(this.inputStart)
        end.setDate(end.getDate() + 7)
        endString = end.toISOString().split('T')[0]
      }else{
        endString = this.inputEnd
      }
      
      this.subscription.add(

        this.nasaService.getAsteroides(this.inputStart,endString).subscribe(
          (data:any)=>{
            this.loader = false
            this.startDate =data.near_earth_objects[this.inputStart]
            this.endDate = data.near_earth_objects[endString]
          } 
        )
        
      )
    }
    
  }
}
