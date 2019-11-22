import { Component, OnInit, Input } from '@angular/core';
import { HttpService} from '../http.service';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isInMobile: boolean;
  newProductsReady: boolean;
  clickCounter: number = 0;
  newProducts;
  name: string='Aja cv';
  imgurl: string="https://stoffe.kawaiifabric.com/images/product_images/thickbox_img/kawaii-fabric-with-colourful-jigsaw-puzzle-pieces-USA-180087-1.JPG";
  description: string="description";

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getNewProducts().subscribe(data=>{
      if(Object.keys(data).length!=0){
        this.newProducts = data;
        this.newProductsReady =true;
      }
      else console.log("error");
    })
    
  }

  countClick(){
    this.clickCounter += 1;
  }
  
  setClasses(){
    let myClasses={
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,
    }
    return myClasses;
  }
  onResize(event){
    if(event.target.innerWidth<768) this.isInMobile=true;
    else this.isInMobile=false;
  }
}
