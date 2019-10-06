import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isInMobile: boolean ;
  clickCounter: number = 0;
  name: string='Aja cv';

  constructor() { }

  ngOnInit() {
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
