import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  API_URL = 'http://localhost:3000';

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  postLogFis(postData:any){
    return this.http.post<HttpResponse<any>>((this.API_URL + '/fis'),postData,{ 'headers': this.headers });
  }

}


