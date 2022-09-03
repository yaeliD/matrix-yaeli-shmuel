import { createFeatureSelector } from '@ngrx/store';
 
export const selectCompanies = createFeatureSelector<any[]>('myCompanies');