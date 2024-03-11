import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoComponent } from './into.component';

describe('IntoComponent', () => {
  let component: IntoComponent;
  let fixture: ComponentFixture<IntoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntoComponent]
    });
    fixture = TestBed.createComponent(IntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
