import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { CompaniesService } from '../services/companies.service';
import { companiesFetchAPISuccess, invokeCompaniesAPI } from './companies.action';
import { selectCompanies } from './companies.selector';
 
@Injectable()

export class CompaniesEffect {
  constructor(
    private actions$: Actions,
    private companiesService: CompaniesService,
    private store: Store
  ) {}
 
  loadAllCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeCompaniesAPI),
      withLatestFrom(this.store.pipe(select(selectCompanies))),
      mergeMap(([, bookformStore]) => {
        if (bookformStore.length > 0) {
          return EMPTY;
        }
        return this.companiesService.postCompanies().pipe(map((data) => companiesFetchAPISuccess({ allCompanies: data })));
      })
    )
  );
}