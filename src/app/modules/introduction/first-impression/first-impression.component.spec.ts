import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstImpressionComponent } from './first-impression.component';

describe('FirstImpressionComponent', () => {
  let component: FirstImpressionComponent;
  let fixture: ComponentFixture<FirstImpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstImpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstImpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
