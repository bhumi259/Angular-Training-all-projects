import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListAddComponent } from './employee-list-add/employee-list-add.component';
import { EmployeeListEditComponent } from './employee-list-edit/employee-list-edit.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeLogoutComponent } from './employee-logout/employee-logout.component';
import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'show',component:EmployeeListComponent,canActivate: [ExpenseGuard]},
  {path:'edit/:id',component:EmployeeListEditComponent,canActivate: [ExpenseGuard]},
  {path:'add',component:EmployeeListAddComponent,canActivate: [ExpenseGuard]},
 
  { path: 'login', component: EmployeeLoginComponent },
  { path: 'logout', component: EmployeeLogoutComponent },

  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  })
export class AppRoutingModule { }
