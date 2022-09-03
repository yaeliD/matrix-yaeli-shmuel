import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  URL = 'https://localhost:44388/api/Companies/';
  Employees: any = [];
  Customers: any = [];

  constructor(private http: HttpClient) {
    this.postEmployees().subscribe((res: any) => {
      this.Employees = res;
    })
    this.postCustomers().subscribe((res: any) => {
      this.Customers = res;
    })
  }

  postCompanies() {
    return this.http.post(`${this.URL}postCompanies`, '');
  }

  postCustomers() {
    return this.http.post(`${this.URL}postCustomers`, '');
  }

  postEmployees() {
    return this.http.post(`${this.URL}postEmployees`, '');
  }
}
