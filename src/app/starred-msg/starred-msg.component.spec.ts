import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredMsgComponent } from './starred-msg.component';

describe('StarredMsgComponent', () => {
  let component: StarredMsgComponent;
  let fixture: ComponentFixture<StarredMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
