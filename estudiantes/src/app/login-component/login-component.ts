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
    if (this.usuario === 'registro' && this.clave === 'alumnos123') {
      localStorage.setItem('sesionEstudiantes', this.usuario);
      this.router.navigate(['/estudiantes']);
    } else {
      alert('Usuario o clave incorrectos');
    }
  }
}

