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
  constructor(private route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._http.getProduct(params.params.name).subscribe(data => {
        this.product=data;
      })
    });
  }

  onMetersChange(meters: number){
    if(meters==null)
      this.meters=1;
    else
      this.meters=meters;
  }

  getPrice(){
    let price: string;
    let snum: string= this.product[0].Precio.toString();
    price = snum.substring(0, snum.length-3)+","+snum.substring(snum.length-3,snum.length)

    return price;
  }

  addToCart(){
    let a= [];
    let b= [];
    let exist: boolean = false;
    let i;
    a = JSON.parse(localStorage.getItem('cart'));
    b = JSON.parse(localStorage.getItem('cart-meters'));
    if(a==null){
      a = a || [];
      b = b || [];
      a.push(this.product[0]);
      b.push(this.meters);
      localStorage.setItem('cart', JSON.stringify(a));
      localStorage.setItem('cart-meters', JSON.stringify(b));
    }else{
      a.forEach((element, index) => {
        if (this.product[0].Nombre==element.Nombre){
          exist=true;
          i=index;
        }
      });
      if(!exist){
        b.push(this.meters);
        a.push(this.product[0]);
        localStorage.setItem('cart', JSON.stringify(a));
        localStorage.setItem('cart-meters', JSON.stringify(b));
      }else{
        console.log(this.meters)
        b[i]+=this.meters;
        localStorage.setItem('cart-meters', JSON.stringify(b));
      }
    }
  }
}
