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
    
    a = JSON.parse(localStorage.getItem('cart'));
    if(a==null){
      a = a || [];
    }
    a.push(this.product);
    localStorage.setItem('cart', JSON.stringify(a));
    
    console.log(localStorage.getItem('cart'))
  }

  setSc(bool){
    this.sc=bool;
  }
}
