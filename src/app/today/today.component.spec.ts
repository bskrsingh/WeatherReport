import { ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TodayComponent } from './today.component';
import { SendMessageService } from '../service/send-message.service';
import {of} from 'rxjs'

const mockListProduct ={"coord":{"lon":-0.1257,"lat":51.5085},
"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
"base":"stations","main":{"temp":294.6,"feels_like":294.29,"temp_min":292.56,"temp_max":296.8,"pressure":1025,"humidity":57},"visibility":10000,"wind":{"speed":0.45,"deg":264,"gust":1.79},"clouds":{"all":40},"dt":1622896999,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1622864777,"sunset":1622923923},"timezone":3600,"id":2643743,"name":"London","cod":200}

describe('TodayComponent', () => {
  let component: TodayComponent;
  let fixture: ComponentFixture<TodayComponent>;
  let mockList = mockListProduct
  let testService : SendMessageService
  let userService;
  let User:any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers:[SendMessageService],
    })
    .compileComponents();
  });

  beforeEach(()  => {
    fixture = TestBed.createComponent(TodayComponent);
    component = fixture.componentInstance;
    testService = TestBed.get(SendMessageService)
    fixture.detectChanges();
  });

  it('testing suscribe method is getting called', fakeAsync(() => {
    User = [];
    const response = User;
    let proSpy = spyOn(testService, 'getWeather').and.returnValue(of(mockList));
    let subSpy = spyOn(testService.getWeather('london'), 'subscribe').and.callThrough();
    component.getWeatherDataCity('london',"er");
    tick();
    expect(proSpy).toHaveBeenCalled();
   // expect(proSpy).toEqual(response)
    expect(subSpy).toHaveBeenCalledTimes(0);
  }));

  it('testing execution within subscrbe method', fakeAsync(() => {
   component.ngOnInit();
   expect(component.showDatas).toBeDefined();
  }));
});
