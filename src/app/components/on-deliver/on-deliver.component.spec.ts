import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDeliverComponent } from './on-deliver.component';

describe('OnDeliverComponent', () => {
  let component: OnDeliverComponent;
  let fixture: ComponentFixture<OnDeliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDeliverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
