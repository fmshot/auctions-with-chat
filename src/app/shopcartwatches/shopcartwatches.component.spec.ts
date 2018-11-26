import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcartwatchesComponent } from './shopcartwatches.component';

describe('ShopcartwatchesComponent', () => {
  let component: ShopcartwatchesComponent;
  let fixture: ComponentFixture<ShopcartwatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcartwatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcartwatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
