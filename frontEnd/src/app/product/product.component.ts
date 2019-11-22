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
    var oldItems = JSON.parse(localStorage.getItem('cart'));

    oldItems.push(this.product);

    localStorage.setItem('cart', JSON.stringify(oldItems));
  }

  setSc(bool){
    this.sc=bool;
  }
}
