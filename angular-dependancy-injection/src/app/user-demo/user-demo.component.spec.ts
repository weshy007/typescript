import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDemoComponent } from './user-demo.component';

describe('UserDemoComponent', () => {
  let component: UserDemoComponent;
  let fixture: ComponentFixture<UserDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDemoComponent]
    });
    fixture = TestBed.createComponent(UserDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
