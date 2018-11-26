import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddauctionComponent } from './adminaddauction.component';

describe('AdminaddauctionComponent', () => {
  let component: AdminaddauctionComponent;
  let fixture: ComponentFixture<AdminaddauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
