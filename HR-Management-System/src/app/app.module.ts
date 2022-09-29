import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListAddComponent } from './employee-list-add/employee-list-add.component';
import { EmployeeListEditComponent } from './employee-list-edit/employee-list-edit.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeLogoutComponent } from './employee-logout/employee-logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeListAddComponent,
    EmployeeListEditComponent,
    EmployeeLoginComponent,
    EmployeeLogoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
