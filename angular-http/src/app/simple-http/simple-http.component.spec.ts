import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHttpComponent } from './simple-http.component';

describe('SimpleHttpComponent', () => {
  let component: SimpleHttpComponent;
  let fixture: ComponentFixture<SimpleHttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleHttpComponent]
    });
    fixture = TestBed.createComponent(SimpleHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
