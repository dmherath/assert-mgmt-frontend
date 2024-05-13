import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssertsComponent } from './view-asserts.component';

describe('ViewAssertsComponent', () => {
  let component: ViewAssertsComponent;
  let fixture: ComponentFixture<ViewAssertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAssertsComponent]
    });
    fixture = TestBed.createComponent(ViewAssertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
