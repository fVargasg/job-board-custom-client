import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ExampleService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getExamples(httpOptions) {
    return this.http.get(this.baseUrl + 'examples', httpOptions);
  }
}

