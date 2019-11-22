import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {

  quantity;
  subtotal: number = 0;
  ptotal;
  constructor() { }

  products;

  ngOnInit() {
    localStorage.clear();
    this.products=JSON.parse(localStorage.getItem('cart'));
    if(this.products!=null){
      this.products.forEach((item, index) => {
        this.ptotal[index]=item.precio;
      });
    }
    console.log(this.products)
  }

  quantityChange(i){
    this.products.forEach((item, index) => {
      this.subtotal+=parseInt(item.precio)*parseInt(this.quantity[index]);
    });
    this.ptotal[i]=this.products[i].precio*this.quantity[i];

  }
}
