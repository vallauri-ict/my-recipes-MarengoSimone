import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  REST_API_SERVER = 'http://localhost:3000/';
  //REST_API_SERVER = 'https://raccapaolo-crudserver.herokuapp.com/api/';

  constructor(private httpClient: HttpClient) { }

  public getRequest(endpoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + endpoint);
  }
  public sendPostRequest(endpoint: string,data:any) {
    return this.httpClient.post(this.REST_API_SERVER + endpoint,data);
  }
  public sendPatchRequest(endpoint: string,data:any) {
    return this.httpClient.patch(this.REST_API_SERVER + endpoint,data);
  }
  public sendDeleteRequest(endpoint: string) {
    return this.httpClient.delete(this.REST_API_SERVER + endpoint);
  }
}
