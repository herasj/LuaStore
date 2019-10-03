import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
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
}
