import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, rotateInDownRightAnimation, rotateInDownRightOnEnterAnimation, slideInDownOnEnterAnimation, slideInUpOnEnterAnimation, slideInLeftOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    rotateInDownRightOnEnterAnimation(),
    slideInDownOnEnterAnimation(),
    slideInUpOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
  ]
})
export class SliderComponent implements OnInit {

  constructor() { }

  index: number = 1; 

  ngOnInit() {
  }

  increaseIndex(){
    if(this.index==2) this.index=1;
    else this.index++;
  }

  decreaseIndex(){
    if(this.index==1) this.index=2;
    else this.index--;
  }
}
