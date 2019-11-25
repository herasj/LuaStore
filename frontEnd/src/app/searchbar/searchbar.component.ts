import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { isEmptyExpression } from '@angular/compiler';
import { collapseAnimation } from 'angular-animations';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  animations: [collapseAnimation()]
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
    if(this.searching){
      this._http.getAutocomplete(this.searching).subscribe(data=>{
        console.log(this.searching);
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
  
  setVisibleFalse(){
    this.hidden=true;
  }
}
