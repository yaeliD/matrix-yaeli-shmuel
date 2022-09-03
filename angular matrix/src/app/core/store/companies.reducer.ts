import { createReducer, on  } from "@ngrx/store";
import { companiesFetchAPISuccess } from './companies.action';
 
export const initialState: ReadonlyArray<any> = [];
 
export const companiesReducer = createReducer(
    initialState,
    on(companiesFetchAPISuccess, (state: any, { allCompanies }: any) => {
      return allCompanies;
    })
);
