import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeLogoutComponent } from './employee-logout/employee-logout.component';
import { EmployeeListAddComponent } from './Employee/employee-list-add/employee-list-add.component';
import { EmployeeListEditComponent } from './Employee/employee-list-edit/employee-list-edit.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { ExpenseGuard } from './Employee/expense.guard';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: EmployeeLoginComponent },
  { path: 'logout', component: EmployeeLogoutComponent },
  {path:'show',component:EmployeeListComponent,canActivate: [ExpenseGuard]},
  {path:'edit/:id',component:EmployeeListEditComponent,canActivate: [ExpenseGuard]},
  {path:'add',component:EmployeeListAddComponent,canActivate: [ExpenseGuard]},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  })
export class AppRoutingModule { }
