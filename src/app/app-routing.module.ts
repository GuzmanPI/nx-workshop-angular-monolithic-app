import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page.component';
import { UsersComponent } from './users/users.component';
import { EmployeeSalesComponent } from './users/employee-sales/employee-sales.component';
import { TeamSalesComponent } from './users/team-sales/team-sales.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomePageComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/:id/individual-sales',
    component: EmployeeSalesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/:id/team-sales',
    component: TeamSalesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
