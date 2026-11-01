import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-logout-component',
  styleUrl: './logout-component.css',
  templateUrl: './logout-component.html',
})
export class LogoutComponent {

  constructor(private router: Router) { }
    
  cerrarSesion() {
      localStorage.removeItem('sesionBiblioteca');
      this.router.navigate(['/login']);
    }
    
}
