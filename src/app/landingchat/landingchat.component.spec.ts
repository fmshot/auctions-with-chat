import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingchatComponent } from './landingchat.component';

describe('LandingchatComponent', () => {
  let component: LandingchatComponent;
  let fixture: ComponentFixture<LandingchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
