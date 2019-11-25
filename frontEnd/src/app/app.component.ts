import { Component,  OnInit, HostListener, ViewChild, ElementRef, } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOnEnterAnimation({duration:300})]
  
})
export class AppComponent implements OnInit {


  @ViewChild("user",{static: false}) user_tile: ElementRef;  
  title = 'frontEnd';
  isInMobile: boolean;
  showingUser: boolean;

  constructor(private router: Router) { }
  
  ngOnInit(){
    if(window.innerWidth<768) this.isInMobile=true;
    else this.isInMobile=false;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
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
