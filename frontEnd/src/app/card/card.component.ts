import { Component, OnInit, Input } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    fadeInOnEnterAnimation({duration:400}),
    fadeOutOnLeaveAnimation({duration:400})
  ]
})
export class CardComponent implements OnInit {

  @Input() description: string;
  @Input() imgurl: string;
  hoverOn: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
