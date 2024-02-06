import { Component } from 'core';
import { Router } from 'router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      alert('Username dan password harus diisi.');
      return;
    }

    this.router.navigate(['/employee-list']);
  }
}
