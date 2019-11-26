import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;
  sc: boolean;
  constructor() { }

  ngOnInit() {
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
      a.push(this.product);
      b.push(1);
      localStorage.setItem('cart', JSON.stringify(a));
      localStorage.setItem('cart-meters', JSON.stringify(b));
    }else{
      a.forEach((element, index) => {
        if (this.product.Nombre==element.Nombre){
          exist=true;
          i=index;
        }
      });
      if(!exist){
        b.push(1);
        a.push(this.product);
        localStorage.setItem('cart', JSON.stringify(a));
        localStorage.setItem('cart-meters', JSON.stringify(b));
      }else{
        b[i]+=1;
        localStorage.setItem('cart-meters', JSON.stringify(b));
      }

    }
  }

  setSc(bool){
    this.sc=bool;
  }

  getPrice(){
    let price: string;
    let snum: string= this.product.Precio.toString();
    price = snum.substring(0, snum.length-3)+","+snum.substring(snum.length-3,snum.length)

    return price;
  }
  
}
