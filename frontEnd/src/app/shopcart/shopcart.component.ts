import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {

  quantity= [];
  subtotal: number = 0;
  ptotal=[];
  
  constructor() { }

  products;

  ngOnInit() {
    this.products=JSON.parse(localStorage.getItem('cart'));
    this.quantity=JSON.parse(localStorage.getItem('cart-meters'))
    if(this.products!=null||this.products!=undefined){
      this.products.forEach((item, index) => {
        this.ptotal[index]=item.Precio+this.quantity[index];
        this.subtotal+=parseInt(item.Precio)*parseInt(this.quantity[index]);
      });
    }
  }

  quantityChange(i){
    this.products.forEach((item, index) => {
      this.subtotal+=parseInt(item.Precio)*parseInt(this.quantity[index]);
    });
    this.ptotal[i]=this.products[i].Precio*this.quantity[i];
  }

  deleteProduct(i: number){
    let a= [];
    let b= [];
    a = JSON.parse(localStorage.getItem('cart'));
    b = JSON.parse(localStorage.getItem('cart-meters'));
    if (i !== -1) {
        a.splice(i, 1);
        b.splice(i, 1);
    }
    if(a.length==0){
      a=null;
      b=null;
    }
    localStorage.setItem('cart',JSON.stringify(a));
    localStorage.setItem('cart-meters',JSON.stringify(b));
    this.products= JSON.parse(localStorage.getItem('cart'));    
    this.quantity= JSON.parse(localStorage.getItem('cart-meters'));    
  }
  getPrice(p: string){
    let price: string;
    let snum: string= p.toString();
    price = snum.substring(0, snum.length-3)+","+snum.substring(snum.length-3,snum.length)

    return price;
  }
}
