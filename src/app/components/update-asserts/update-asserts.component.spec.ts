import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssertsComponent } from './update-asserts.component';

describe('UpdateAssertsComponent', () => {
  let component: UpdateAssertsComponent;
  let fixture: ComponentFixture<UpdateAssertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAssertsComponent]
    });
    fixture = TestBed.createComponent(UpdateAssertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
