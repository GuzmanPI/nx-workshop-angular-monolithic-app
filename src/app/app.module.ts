import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { IconsProviderModule } from './ng-zorro-bundle/icons-provider.module';
import { NgZorroBundleModule } from './ng-zorro-bundle/ng-zorro-bundle.module';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { WelcomePageComponent } from './pages/welcome-page.component';
import { UsersComponent } from './users/users.component';
import { PieChartComponent } from './shared/pie-chart.component';
import { BarChartComponent } from './shared/bar-chart.component';
import { EmployeeSalesComponent } from './users/employee-sales/employee-sales.component';
import { TeamSalesComponent } from './users/team-sales/team-sales.component';
import { ProductsComponent } from './products/products.component';
import { FiguresComponent } from './figures/figures.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { StorageUtils } from './utils/storage.utils';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    UsersComponent,
    ProductsComponent,
    PieChartComponent,
    BarChartComponent,
    EmployeeSalesComponent,
    TeamSalesComponent,
    FiguresComponent,
    ProductCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NgZorroBundleModule,
    ChartsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
