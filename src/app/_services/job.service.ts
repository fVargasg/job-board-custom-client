import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getJobs(httpOptions) {
    return this.http.get(this.baseUrl + 'postings', httpOptions);
  }

  createJob(model: any, httpOptions) {
    return this.http.post(this.baseUrl + 'postings', model, httpOptions);
  }

}
