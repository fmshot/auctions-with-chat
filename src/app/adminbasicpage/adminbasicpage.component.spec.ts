import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbasicpageComponent } from './adminbasicpage.component';

describe('AdminbasicpageComponent', () => {
  let component: AdminbasicpageComponent;
  let fixture: ComponentFixture<AdminbasicpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbasicpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbasicpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
