import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import {rotateInDownRightOnEnterAnimation, slideInDownOnEnterAnimation, 
        slideInUpOnEnterAnimation, slideInLeftOnEnterAnimation, slideInRightOnEnterAnimation, 
        slideOutLeftOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    slideInRightOnEnterAnimation(),
    slideOutLeftOnLeaveAnimation(),
    rotateInDownRightOnEnterAnimation(),
    slideInDownOnEnterAnimation(),
    slideInUpOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
  ]
})
export class SliderComponent implements OnInit {

  constructor() { }

  private timerSubscription: Subscription;
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
  
  ngAfterViewInit() : void {
    this.timerSubscription = timer(6000, 6000).subscribe(() => {
      this.increaseIndex();
    });
  }
}
