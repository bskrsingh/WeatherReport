import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SendMessageService } from './send-message.service';

describe('SendMessageService', () => {
  let service: SendMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(SendMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
