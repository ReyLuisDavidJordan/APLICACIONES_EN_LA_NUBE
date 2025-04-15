import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employeeArray: Employee[] = [];
  selectedEmployee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employeeArray = employees;
    });
  }

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.employeeService.addEmployee(this.selectedEmployee).subscribe(() => {
        this.getEmployees();
        this.selectedEmployee = new Employee();
      });
    } else {
      this.employeeService.updateEmployee(this.selectedEmployee).subscribe(() => {
        this.getEmployees();
        this.selectedEmployee = new Employee();
      });
    }
  }

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  delete() {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(this.selectedEmployee.id).subscribe(() => {
        this.getEmployees();
        this.selectedEmployee = new Employee();
      });
    }
  }
}
