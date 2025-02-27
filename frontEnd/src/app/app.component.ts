import { Component,  OnInit, HostListener, ViewChild, ElementRef, } from '@angular/core';
import { fadeInAnimation, fadeOutAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation({duration:300}),fadeOutAnimation({duration:300})]
  
})
export class AppComponent implements OnInit {


  @ViewChild("user",{static: false}) user_tile: ElementRef;  
  title = 'frontEnd';
  isInMobile: boolean;
  showingUser: boolean;

  ngOnInit(){
    if(window.innerWidth<768) this.isInMobile=true;
    else this.isInMobile=false;
  }
  
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.user_tile.nativeElement.contains(event.target)) {
      this.showingUser = true;
    }
    else {
      this.showingUser = false
    };
  }

  onResize(event){
    if(event.target.innerWidth<768) this.isInMobile=true;
    else this.isInMobile=false;
  }
  
}
