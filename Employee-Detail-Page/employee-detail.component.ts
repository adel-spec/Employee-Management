import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  employee: any; 
  
  constructor(private router: Router, private route: ActivatedRoute) {
    this.employee = this.route.snapshot.data.employee;
  }

  goBack() {
    this.router.navigate(['/employee-list']);
  }
}
