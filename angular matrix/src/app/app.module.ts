import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersInterceptor } from './core/interceptors/headers.interceptor';
import { ChartComponent } from './shared/component/chart/chart.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { companiesReducer } from './core/store/companies.reducer';
import { CompaniesEffect } from './core/store/companies.effect';
import { HomeComponent } from './pages/home/home.component';
import { CompaniesComponent } from './shared/component/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HomeComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    StoreModule.forRoot({}),
    StoreModule.forFeature('myCompanies', companiesReducer),
    EffectsModule.forRoot([CompaniesEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
