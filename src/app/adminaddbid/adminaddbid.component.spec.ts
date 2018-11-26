import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddbidComponent } from './adminaddbid.component';

describe('AdminaddbidComponent', () => {
  let component: AdminaddbidComponent;
  let fixture: ComponentFixture<AdminaddbidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddbidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
