import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getRegions() {
    return this.httpClient.get(this.baseUrl + 'regions')
  }

  createRegion(model: any) {
    return this.httpClient.post(this.baseUrl + 'regions', model);
  }

  getLocations() {
    return this.httpClient.get(this.baseUrl + 'locations');
  }

  createLocation(model: any) {
    return this.httpClient.post(this.baseUrl + 'locations', model)
  }

}
