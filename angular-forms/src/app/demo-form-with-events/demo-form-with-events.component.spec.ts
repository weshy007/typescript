import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithEventsComponent } from './demo-form-with-events.component';

describe('DemoFormWithEventsComponent', () => {
  let component: DemoFormWithEventsComponent;
  let fixture: ComponentFixture<DemoFormWithEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFormWithEventsComponent]
    });
    fixture = TestBed.createComponent(DemoFormWithEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
