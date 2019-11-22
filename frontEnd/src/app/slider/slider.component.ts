import { Component, OnInit, Input } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import {NgxTinySliderSettingsInterface} from 'ngx-tiny-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  
})
export class SliderComponent implements OnInit {

  @Input() products;
  tinySliderConfig: NgxTinySliderSettingsInterface;
  private timerSubscription: Subscription;
  index: number = 1; 

  ngOnInit() {
    this.tinySliderConfig = {
      
      nav: false,
      
      controlsContainer: '#customize-controls',
      swipeAngle: false,
      loop: false,
      responsive: {
        350: {
          items: 2,
          gutter: 20,
          touch:true,
          edgePadding: 20
        },
        500: {
          items: 5
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
