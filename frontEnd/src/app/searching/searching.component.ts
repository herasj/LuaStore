import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {

  querys;
  products;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private _http: HttpService)
    {
      this.route.queryParams.subscribe(params => {
          this.querys = params;

      });
    }
  ngOnInit() {
    this.getFromQuerys();
  }

  async queryAdd(query, val){
    await this.router.navigate(['/search'], { queryParams: { [query]: val}, queryParamsHandling: 'merge' });
    this.getFromQuerys();
  }

  getFromQuerys(){
    this._http.getSearch(this.querys).subscribe(data=>{
      if(Object.keys(data).length!=0){
        this.products=data;
        console.log(this.products)
      }
      else{
        console.log("Error en el request we")
        console.log(data);
      }
    });
  }

}
