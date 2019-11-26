import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  API_URL: string = "http://ec2-3-86-139-83.compute-1.amazonaws.com:3000/";

  constructor(private http: HttpClient) { }
  
  getAutocomplete(searching){
    return this.http.get(this.API_URL+'product/name?name='+searching);
  }

  getSearch(params){
    return this.http.get(this.API_URL+'search'+this.jsonToQueryString(params));
  }

  getProduct(name){
    return this.http.get(this.API_URL+'product?name='+name);
  }

  getNewProducts(){
    return this.http.get(this.API_URL+'product/new');
  }

  postRegister(json){
    return this.http.post(this.API_URL+'register', json)
  }

  private jsonToQueryString(json) {
    return '?' + 
    Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key]);
    }).join('&');
  }
}
