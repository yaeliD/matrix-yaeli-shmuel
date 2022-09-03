import { createAction, props } from '@ngrx/store';
 
export const invokeCompaniesAPI = createAction(
  '[Companies API] Invoke Companies Fetch API'
);
 
export const companiesFetchAPISuccess = createAction(
  '[Companies API] Fetch API Success',
  props<{ allCompanies: any }>()
);

