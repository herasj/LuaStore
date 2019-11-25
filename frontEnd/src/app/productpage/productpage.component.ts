import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  product;
  meters: number = 1;
  newProducts;
  constructor(private route: ActivatedRoute, private _http: HttpService) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._http.getProduct(params.params.name).subscribe(data => {
        this.product=data;
      })
    });
  }

  getPrice(){
    let price: string;
    let snum: string= this.product[0].Precio.toString();
    price = snum.substring(0, snum.length-3)+"."+snum.substring(snum.length-3,snum.length)

    return price;
  }

  
}
