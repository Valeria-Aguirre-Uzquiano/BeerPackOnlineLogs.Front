import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    API_URL = 'https://thawing-thicket-51863.herokuapp.com';
  
    tkn = 'Bearer ' + localStorage.getItem('token');
  
    headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  
    
  
    constructor(private http: HttpClient) { }
  
    postUser(postData:any){
      return this.http.post<HttpResponse<any>>((this.API_URL + '/user'),postData,{ 'headers': this.headers });
    }
}
