import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private http: HttpClient) { }

  getWeather(data: any) {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?appid=3d8b309701a13f65b660fa2c64cdc517&q=' + data)
  }

  getWeatherData(param: any) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?appid=3d8b309701a13f65b660fa2c64cdc517&q=' + param)
  }

}
