import { Component, OnInit } from '@angular/core';
import { SendMessageService } from '../service/send-message.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
data:any = [];
weatherData:any=[]
myParam:any;
dataset:any;
primaryDisplay= true;
secondaryDsp=false;
forecastDetail:any;
selectedIndex:any;
city:any;
sunset:any;
sunrise:any;
population:any;
timezone:any;
dt_text:any;
sealevel:any

  constructor(private route : ActivatedRoute,private forecast: SendMessageService) { 
  }

  ngOnInit(): void {
    this.myParam = this.route.snapshot.params.name;
    this.forecast.getWeather(this.myParam).subscribe(res =>{
      this.data.push(res)
      this.dataset = this.data[0].list;
      this.city = this.data[0].city.name;
      this.sunset = this.data[0].city.sunset;
      this.sunrise = this.data[0].city.sunrise;
      this.dt_text = this.data[0].list[0].dt_txt;
      this.sealevel = this.data[0].list[0].main.sea_level
      
      this.futureForecast(this.dataset)
    })
   // this.forecast.setWeatherDatas(this.data)
  }

  futureForecast(data:any){
    for(let i=0; i<data.length; i=i+8){
      this.weatherData.push(data[i])
    }
  }

  toggle(data:any,index:number){
    this.primaryDisplay = !this.primaryDisplay;
    this.secondaryDsp = !this.secondaryDsp;
    this.forecastDetail =  data
    this.selectedIndex = index
  }
  toggles(){
    this.primaryDisplay = !this.primaryDisplay;
    this.secondaryDsp = !this.secondaryDsp;
  }
  showDetails(data:any){
    this.forecastDetail = data
  }

}