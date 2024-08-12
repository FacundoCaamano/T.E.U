import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../service/nasa.service';

@Component({
  selector: 'app-in-sight',
  templateUrl: './in-sight.component.html',
  styleUrls: ['./in-sight.component.scss']
})
export class InSightComponent implements OnInit {
  marsWeatherData: any[] = [];
  
  constructor(private nasaService:NasaService){
  }
  ngOnInit(): void {
    this.nasaService.inSight().subscribe((data:any) =>{
      this.marsWeatherData = data;
     
      
    } 
  )
 
  }
}
