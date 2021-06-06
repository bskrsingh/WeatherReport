import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendMessageService } from '../service/send-message.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit, OnDestroy {
  showDatas: any = []
  data: any
  WeatherData: any;
  constructor(private http: HttpClient, private forecast: SendMessageService, private router: Router, private actRouter: ActivatedRoute) { }
  isDay: any = true
  param: any;
  username: any = '';
  keys: any = ["er"];
  sub: any;
  sunsetTime: any;
  sunriseTime: any;
  paramRecord:any;
  ngOnInit(): void {
    //this is using to change the day/moon
    this.WeatherData = {
      main: {},
      isDay: true
    };
    // 5 diffrent European city
    this.param = ["London", "Moscow", "Berlin", "madrid", "Rome"]
    //by default load the europe city
    this.param.forEach((paramData: any) => {
      this.getWeatherDataCity(paramData, this.keys);
    });
  }

  // get the city forecast details from service
  getWeatherDataCity(param: any, key: any) {
    // calling the API from service
    this.sub = this.forecast.getWeatherData(param).subscribe(res => {
      this.showDatas.push(res) // send the data into an array for retrieving the data in DOM
     this.paramRecord = res;
      this.WeatherData = res;
      this.dayNightdsp()// display for day night of the city
    });
    console.log("this.showDatas", this.showDatas);
  }

  dayNightdsp() {
    this.sunsetTime = new Date(this.WeatherData.sys.sunset * 1000).toUTCString();
    let currentDate = new Date();
    currentDate.toLocaleString('en-GB', { timeZone: 'Europe/London' })
    if (this.keys[0] == 'er') { // this will check to giving the europe or india and accordingly change the time
      currentDate.toLocaleString(); // convert the time as per europe
    }
    this.WeatherData.isDay = (currentDate.getTime() < this.sunsetTime);
  }


  //call when click on any of the city and sending the city name as a parameter
  showReocrds(data: any) {
    this.forecast.getWeather(data);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
