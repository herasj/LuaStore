import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-meteradder',
  templateUrl: './meteradder.component.html',
  styleUrls: ['./meteradder.component.scss']
})
export class MeteradderComponent implements OnInit {
  @ViewChild("meter",{static: false}) input: ElementRef;
  @Input() meters;
  @Output() metersChange = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  eventHandler(event){
    console.log(event)
    if(event==null){
      this.meters=1;
      this.metersChange.emit(this.meters);
    }else{
      this.meters=event;
      this.metersChange.emit(this.meters);
    }
    
  }
  inc(){
    this.input.nativeElement.stepUp();
  }
  dec(){
    this.input.nativeElement.stepDown();
  }
}
