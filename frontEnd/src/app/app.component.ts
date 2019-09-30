import { Component,  OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {
  

  title = 'frontEnd';
  isInMobile: boolean;
  showingUser: boolean;
  showingCart: boolean;
  ngOnInit(){
    console.log("init en sakgas")
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(event.toElement.id=="shopping") {
      this.showingCart = true;
      this.showingUser = false;
      console.log(this.showingUser);
    }
    else if(event.toElement.id=="user") {
      this.showingUser = true;
      this.showingCart = false;
      console.log(this.showingUser);
    }
    else {
      this.showingUser = false
      this.showingCart = false;
      console.log(event);
    };
  }

  onResize(event){
    if(event.target.innerWidth<768) this.isInMobile=true;
    else this.isInMobile=false;
    console.log("resize");
    this.showingUser = false
    this.showingCart = false;
  }

  firstResize(){
    console.log("dsds")
  }

  setVisible(visible: boolean){
    this.showingUser=visible;
  }
  
}
