import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAssertComponent } from './add-new-assert.component';

describe('AddNewAssertComponent', () => {
  let component: AddNewAssertComponent;
  let fixture: ComponentFixture<AddNewAssertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewAssertComponent]
    });
    fixture = TestBed.createComponent(AddNewAssertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
