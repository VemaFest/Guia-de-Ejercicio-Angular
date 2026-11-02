import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-logout-component',
  styleUrl: './logout-component.css',
  templateUrl: './logout-component.html',
})
export class LogoutComponent {

  logout() {
    localStorage.removeItem('sesionEstudiantes');
    window.location.href = '/login';
  }

}
