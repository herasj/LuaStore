import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteradderComponent } from './meteradder.component';

describe('MeteradderComponent', () => {
  let component: MeteradderComponent;
  let fixture: ComponentFixture<MeteradderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteradderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteradderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
