import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectsOrdersComponent } from './rejects-orders.component';

describe('RejectsOrdersComponent', () => {
  let component: RejectsOrdersComponent;
  let fixture: ComponentFixture<RejectsOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectsOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
