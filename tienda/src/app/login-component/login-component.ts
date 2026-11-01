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
      console.log('usuario:', JSON.stringify(this.usuario), 'clave:', JSON.stringify(this.clave));
    if (this.usuario === 'admin' && this.clave === '123') {
      localStorage.setItem('sesionTienda', this.usuario);
      this.router.navigate(['/productos']);
    } else {
      alert('Usuario o clave incorrectos');
    }
  }



}
