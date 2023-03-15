import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByscalSpinnerComponent } from './byscal-spinner.component';

describe('ByscalSpinnerComponent', () => {
  let component: ByscalSpinnerComponent;
  let fixture: ComponentFixture<ByscalSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByscalSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByscalSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
