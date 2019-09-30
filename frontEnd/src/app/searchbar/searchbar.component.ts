import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit{

  @Input() isInMobile: boolean;
  searching: string;
  hidden: boolean = true;
  results: Object;

  constructor(private _http: HttpService) { }

  
  ngOnInit(){

  }
  
  
  
  searchTriggered(){
    console.log(this.searching);
    if(this.searching){
      this._http.getSearch(this.searching).subscribe(data=>{
        if(Object.keys(data).length!=0){
          console.log(data);
          this.results=data;
          this.hidden=false;
        }
        else this.hidden=true;
      })
    }
    else this.hidden=true;
    
  }

  save(){
    console.log(this.searching);
  }
}
