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
  param: any
  ngOnInit(): void {

    // 5 diffrent European city
    this.param = ["London", "Moscow", "Berlin", "madrid", "Rome"]
    // calling the API from service
    this.param.forEach((element: any) => {
      this.forecast.getWeatherData(element).subscribe(res => {
        this.showDatas.push(res) // send the data into an array for retrieving the data in DOM
      });
    });
  }

  //call when click on any of the city and sending the city name as a parameter
  showReocrds(data: any) {
    this.forecast.getWeather(data);
  }


}
