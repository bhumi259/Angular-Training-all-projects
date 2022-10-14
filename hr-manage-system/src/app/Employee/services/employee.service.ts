import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [{
    id: 1,
    name: 'Bhumika',
    salary:200000,
    email: 'bhumika@gmail.com',
    gender: 'Female'
  },
  {
    id: 2,
    name: 'Prahlad',
    salary:40000,
    email: 'prahlad@gmail.com',
    gender: 'Male'
  },
  {
    id: 3,
    name: 'Riya Jain',
    salary:40000,
    email: 'riya@gmail.com',
    gender: 'Female'
  }];

  constructor(private router: Router) { }
  getEmployees() {
    return this.employees
  }
  removeUser(id: number) {
    this.employees = this.employees.filter(x => x.id != id);
  }
  updateUser(Employee: Employee) {
    const userIndex = this.employees.findIndex(x => x.id == Employee.id);
    if (userIndex != null && userIndex != undefined) {
      this.employees[userIndex] = Employee;
    }
  }
  getUsersByID(id: number) {
    return this.employees.find(x => x.id == id)
  }
}
