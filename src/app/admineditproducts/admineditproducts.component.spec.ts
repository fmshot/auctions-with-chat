import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditproductsComponent } from './admineditproducts.component';

describe('AdmineditproductsComponent', () => {
  let component: AdmineditproductsComponent;
  let fixture: ComponentFixture<AdmineditproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
