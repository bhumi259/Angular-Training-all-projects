import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListEditComponent } from './employee-list-edit.component';

describe('EmployeeListEditComponent', () => {
  let component: EmployeeListEditComponent;
  let fixture: ComponentFixture<EmployeeListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
