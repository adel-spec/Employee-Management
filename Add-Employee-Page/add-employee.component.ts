import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  username: string = '';
  firstName: string = '';
  constructor(private router: Router) {}

  saveEmployee() {
    if (this.username.trim() === '' || this.firstName.trim() === '') {
      alert('Semua field wajib diisi.');
      return;
    }

    this.router.navigate(['/employee-list']);
  }

  cancel() {
    this.router.navigate(['/employee-list']);
  }
}
