import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutshopcartComponent } from './aboutshopcart.component';

describe('AboutshopcartComponent', () => {
  let component: AboutshopcartComponent;
  let fixture: ComponentFixture<AboutshopcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutshopcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutshopcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
