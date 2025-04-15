import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = 'http://localhost/api/employee.php';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL);
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.apiURL}?id=${id}`;
    return this.http.get<Employee>(url);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL, employee, this.httpOptions);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiURL}?id=${employee.id}`;
    return this.http.put<Employee>(url, employee, this.httpOptions);
  }

  deleteEmployee(id: number): Observable<{}> {
    const url = `${this.apiURL}?id=${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
