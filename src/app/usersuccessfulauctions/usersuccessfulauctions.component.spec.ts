import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersuccessfulauctionsComponent } from './usersuccessfulauctions.component';

describe('UsersuccessfulauctionsComponent', () => {
  let component: UsersuccessfulauctionsComponent;
  let fixture: ComponentFixture<UsersuccessfulauctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersuccessfulauctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersuccessfulauctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
