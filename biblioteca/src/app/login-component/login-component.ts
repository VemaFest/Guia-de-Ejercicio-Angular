import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  
  iniciarSesion() { 
    if (this.usuario === 'bibliotecario' && this.clave === 'biblio123') { 
      localStorage.setItem('sesionBiblioteca', this.usuario); 
      this.router.navigate(['/libro']); 
      } else { 
      alert('Usuario o contraseña incorrectos'); 
      } 
    }




}
