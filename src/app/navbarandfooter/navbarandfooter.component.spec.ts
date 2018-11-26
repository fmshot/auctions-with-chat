import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarandfooterComponent } from './navbarandfooter.component';

describe('NavbarandfooterComponent', () => {
  let component: NavbarandfooterComponent;
  let fixture: ComponentFixture<NavbarandfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarandfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarandfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
