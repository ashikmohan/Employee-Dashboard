import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchingService {

  constructor(public http:HttpClient) { }
  fetchdata(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
