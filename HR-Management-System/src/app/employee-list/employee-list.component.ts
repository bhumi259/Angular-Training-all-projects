import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] =[];
  constructor(private employeeService:EmployeeService, private router: Router,) { }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployees();
  }

  remove(id: number) {
    this. employeeService.removeUser(id);
    this.employeeList = this.employeeService.getEmployees();
  }
  
}
