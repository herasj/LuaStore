import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import {NgxTinySliderSettingsInterface} from 'ngx-tiny-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  
})
export class SliderComponent implements OnInit {

  tinySliderConfig: NgxTinySliderSettingsInterface;
  private timerSubscription: Subscription;
  index: number = 1; 

  ngOnInit() {
    this.tinySliderConfig = {
      touch: true,
      nav: false,
      gutter: 10,
      items:5,
      controlsContainer: '#customize-controls',
      swipeAngle: true,
      controls: false,
      responsive: {
        350: {
          items: 3,
          controls: true,
          edgePadding: 30,
        },
        500: {
          items: 4
        }
      },
    };
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
