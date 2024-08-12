import { Component, OnDestroy, OnInit } from '@angular/core';
import { NasaService } from '../../service/nasa.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class APODComponent implements OnInit, OnDestroy{
  datePicture?:string
  APOD_DATA:any
  subscription:Subscription = new Subscription()
  loading!:boolean
  imgLoad!:boolean
  today!: string;
  constructor(private nasaService:NasaService){
  }
  ngOnInit(): void {

      const currentDate = new Date();
      this.today = currentDate.toISOString().split('T')[0];

      this.loading =true
      this.subscription.add(
        this.nasaService.APOD().subscribe(data =>{
          this.APOD_DATA = data 
          this.loading =false
          this.imgLoad=false
        })
      ) 
   
  }
  
  dateApod(){
    
    this.loading =false
    console.log(this.datePicture);
    this.subscription.add(
      this.nasaService.APOD(this.datePicture).subscribe(data =>{
        this.loading =false    
        this.APOD_DATA = data
        this.imgLoad = false; 
      } 
    )
    )
  }
  imagenLoad(){
    this.imgLoad = true
    console.log(this.imgLoad);
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
