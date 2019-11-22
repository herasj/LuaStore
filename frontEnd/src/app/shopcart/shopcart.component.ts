import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {

  quantity;
  subtotal: number;
  ptotal;
  constructor() { }

  products;

  ngOnInit() {
    this.products=localStorage.getItem("cart");
  }

  quantityChange(i){
    this.products.forEach((item, index) => {
      this.subtotal+=parseInt(item.precio)*parseInt(this.quantity[index]);
    });
    this.ptotal[i]=this.products[i].precio*this.quantity[i];

  }
}
