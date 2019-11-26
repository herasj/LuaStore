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
  user;
  userEmail;
  password;
  unoexist: boolean = false;
  err: boolean = false;
  logged: boolean = false;
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
    this.user=JSON.parse(localStorage.getItem('userInfo'));
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

  checkUser(){
    if(this.userEmail!=null&&this.password!=null){
      let a = JSON.parse(localStorage.getItem('userInfo'));
      console.log(a);
      if(a==null)
        this.unoexist=true;
      else{
        if(a.email==this.userEmail&&a.pass==this.password){
          this.user=a;
          this.logged=true;
        }else{
          this.err=true;
        }
      }
    }
  }

  onResize(event){
    if(event.target.innerWidth<768) this.isInMobile=true;
    else this.isInMobile=false;
  }

  getName(){
    return this.user.name
  }
  
}
