import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list-add',
  templateUrl: './employee-list-add.component.html',
  styleUrls: ['./employee-list-add.component.css']
})
export class EmployeeListAddComponent implements OnInit {

  checkForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.checkForm = this.formBuilder.group({
      id: 0,
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      salary: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
    })

  }
  get name() {
    return this.checkForm.get('name');
  }
  employees: Employee[] = [];

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees()
  }

  onSubmit() {
    if (this.checkForm.valid) {
      var item = this.employeeService.getEmployees();
      console.log(this.checkForm.value);
      let a = this.checkForm.value;
      this.employees.push(a);
      this.router.navigate(['/show']);
    } else {
      this.formSubmitted = true;
    }
  }

}
