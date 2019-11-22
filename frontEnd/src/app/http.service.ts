import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  API_URL: string = "http://ec2-3-83-217-87.compute-1.amazonaws.com:3000/";

  constructor(private http: HttpClient) { }
  
  getAutocomplete(searching){
    return this.http.get(this.API_URL+'product/name?name='+searching);
  }

  getSearch(params){
    return this.http.get(this.API_URL+'product'+this.jsonToQueryString(params));
  }

  getNewProducts(){
    return this.http.get(this.API_URL+'product/new');
  }

  private jsonToQueryString(json) {
    return '?' + 
    Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key]);
    }).join('&');
  }
}
