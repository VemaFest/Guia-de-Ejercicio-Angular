import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.usuario === 'vendedor' && this.clave === 'tienda123') {
      localStorage.setItem('sesionTienda', this.usuario);
      this.router.navigate(['/productos']);
    } else {
      alert('Usuario o clave incorrectos');
    }
  }



}
