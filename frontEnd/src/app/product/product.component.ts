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
    let b= []
    let exist: boolean = false;
    let i;
    a = JSON.parse(localStorage.getItem('cart'));
    b = JSON.parse(localStorage.getItem('cart-meters'));
    a.forEach((element, index) => {
      if (this.product.Nombre==element.Nombre){
        exist=true;
        i=index;
      }
    });
    if(!exist){
      if(a==null){
        a = a || [];
      }
      a.push(this.product);
      localStorage.setItem('cart', JSON.stringify(a));
    }else{
      if(b==null){
        
      }
    }
    
    
    console.log(localStorage.getItem('cart'))
  }

  setSc(bool){
    this.sc=bool;
  }

  getPrice(){
    let price: string;
    let snum: string= this.product.Precio.toString();
    price = snum.substring(0, snum.length-3)+"."+snum.substring(snum.length-3,snum.length)

    return price;
  }
  
}
