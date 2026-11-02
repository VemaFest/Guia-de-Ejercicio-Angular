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

  constructor(private router: Router) {  }

  login(){
    if (this.usuario === 'veterinario' && this.clave === 'mascotas123'){
      localStorage.setItem('sesionVeterinaria', this.usuario);
      this.router.navigate(['/mascotas']);
    } else {
      alert ('Usuario o clave incorrectos')
    }
  }
  

}
