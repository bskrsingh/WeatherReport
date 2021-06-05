import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendMessageService } from '../service/send-message.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  showDatas: any = []
  data: any
  WeatherData: any;
  constructor(private http: HttpClient, private forecast: SendMessageService, private router: Router, private actRouter: ActivatedRoute) { }
  isDay: any = true
  param: any;
  username: any = '';
  keys:any=["er"];
  ngOnInit(): void {
    //this is using to change the day/moon
    this.WeatherData = {
      main: {},
      isDay: true
    };
    // 5 diffrent European city
    this.param = ["London", "Moscow", "Berlin", "madrid", "Rome"]
    //by default load the europe city
    this.getWeatherDataCity(this.param, this.keys);
  }

  // get the city forecast details from service
  getWeatherDataCity(param: any, key:any) {
    // calling the API from service
    param.forEach((element: any) => {
      this.forecast.getWeatherData(element).subscribe(res => {
        this.showDatas.push(res) // send the data into an array for retrieving the data in DOM
        this.WeatherData = res;
        let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
        this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
        let currentDate = new Date();
        if(this.keys[0] == 'er'){ // this will check to giving the europe or india and accordingly change the time
        currentDate.toLocaleString('en-GB', { timeZone: 'Europe/London' }); // convert the time as per europe
        }
        this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
      });
    });
  }

  // calling input field for specific indian city
  getWeatherCity(key:any) {    
    this.keys.push(key);
    this.param = [];
    this.param.push(this.username)
    this.getWeatherDataCity(this.param,this.keys);
  }
  
  //call when click on any of the city and sending the city name as a parameter
  showReocrds(data: any) {
    this.forecast.getWeather(data);
  }


}
