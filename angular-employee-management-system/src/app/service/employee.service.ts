import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

const baseUrl = 'http://localhost:8080/api/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  get(id: any): Observable<Employee> {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  create(data: Employee): Observable<any> {
    return this.http.post(baseUrl, data);
  }

/*   update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  } */

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
