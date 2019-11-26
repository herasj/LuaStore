import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  quantity= [];
  subtotal: number = 0;
  ptotal=[];
  products;

  constructor() { }

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

  getPrice(p: string){
    let price: string;
    let snum: string= p.toString();
    price = snum.substring(0, snum.length-3)+","+snum.substring(snum.length-3,snum.length)

    return price;
  }

}
