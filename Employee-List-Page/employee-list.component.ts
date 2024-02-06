import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: any[] = []; 

  constructor(private router: Router) {}

  goToAddEmployee() {
    this.router.navigate(['/add-employee']);
  }
}
