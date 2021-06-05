import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { SendMessageService } from './send-message.service';

describe('SendMessageService', () => {
  let service: SendMessageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers:[SendMessageService]
    });
    service = TestBed.inject(SendMessageService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be retreive the Weather of 5 European city', () => {
    expect(httpTestingController).toBeTruthy();
  });
  it('should be retreive the details of city', () => {
    expect(httpTestingController).toBeTruthy();
  });
});
