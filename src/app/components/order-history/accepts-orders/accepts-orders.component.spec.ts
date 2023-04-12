import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptsOrdersComponent } from './accepts-orders.component';

describe('AcceptsOrdersComponent', () => {
  let component: AcceptsOrdersComponent;
  let fixture: ComponentFixture<AcceptsOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptsOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
