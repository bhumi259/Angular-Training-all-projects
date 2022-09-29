import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListAddComponent } from './employee-list-add.component';

describe('EmployeeListAddComponent', () => {
  let component: EmployeeListAddComponent;
  let fixture: ComponentFixture<EmployeeListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
