// import { TestBed } from '@angular/core/testing';

// import { HttpService } from './http.service';

// describe('HttpService', () => {
//   let service: HttpService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(HttpService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    })
  );

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
