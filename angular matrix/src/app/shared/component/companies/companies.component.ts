import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CompaniesService } from 'src/app/core/services/companies.service';
import { invokeCompaniesAPI } from 'src/app/core/store/companies.action';
import { selectCompanies } from '../../../core/store/companies.selector';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, OnDestroy {

  companies: any = [];
  customers: any = [];
  employees: any = [];
  companies$: Subscription | undefined;
  companiesStor$: any;
  categoriesToChart: any;

  constructor(private store: Store, private companiesService: CompaniesService) { }

  ngOnDestroy(): void {
    this.companies$?.unsubscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(invokeCompaniesAPI());
    this.companiesStor$ = this.store.pipe(select(selectCompanies));
    this.companies$ = this.companiesStor$.subscribe((companies: any) => {
      companies.forEach((company: any, index: number) => {
        this.companies[index] = company.Name
        this.companiesService.Customers.forEach((customer: any) => {
          if (customer.NameCompany === company.Name) {
            this.customers[index] = customer.Num;
          }
        });
        this.companiesService.Employees.forEach((employee: any) => {
          if (employee.NameCompany === company.Name) {
            this.employees[index] = employee.Num;
          }
        });
      });
      this.categories();
    })
  }

  categories() {
    this.categoriesToChart = [{
      name: 'customers',
      type: 'bar',
      data: this.customers,
      color: 'red',
      barWidth: '30%',
    },
    {
      name: 'employees',
      type: 'line',
      data: this.employees,
      color: 'pink',
      barWidth: '30%',
    }];
  }
}
