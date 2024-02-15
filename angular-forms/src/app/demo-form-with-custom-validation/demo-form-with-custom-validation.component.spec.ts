import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithCustomValidationComponent } from './demo-form-with-custom-validation.component';

describe('DemoFormWithCustomValidationComponent', () => {
  let component: DemoFormWithCustomValidationComponent;
  let fixture: ComponentFixture<DemoFormWithCustomValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFormWithCustomValidationComponent]
    });
    fixture = TestBed.createComponent(DemoFormWithCustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
