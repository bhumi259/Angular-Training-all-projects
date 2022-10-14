import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Employee/auth.service';

@Component({
  selector: 'app-employee-logout',
  templateUrl: './employee-logout.component.html',
  styleUrls: ['./employee-logout.component.css']
})
export class EmployeeLogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
  }
}
