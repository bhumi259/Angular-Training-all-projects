import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Employee/auth.service';

@Component({
   selector: 'app-employee-login',
   templateUrl: './employee-login.component.html',
   styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

   userName: string;
   password: string;
   formData: FormGroup;

   constructor(private authService: AuthService, private router: Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl(""),
         password: new FormControl(""),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;
      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe(data => {
            console.log("Is Login Success: " + data);
            if (data) {
               this.router.navigate(['/show'])
                  .then(() => {
                     window.location.reload();
                  });
            }
         });
   }
}
