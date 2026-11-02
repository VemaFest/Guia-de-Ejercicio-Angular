import { Component } from '@angular/core';
import { LogoutComponent } from '../logout-component/logout-component';
import { Router } from '@angular/router';

interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  edad: number;
  propietario: string;
}

@Component({
  imports: [LogoutComponent],
  selector: 'app-mascota-component',
  styleUrl: './mascota-component.css',
  templateUrl: './mascota-component.html',
})
export class MascotaComponent {
  mascotas: Mascota[] = [
    {id: 0, nombre: 'Luna', especie:'Gato', edad: 0, propietario: 'Ana Ejemplo'}
  ];
  mascota: Mascota = {id: 0, nombre: '', especie: '', edad: 0, propietario: ''}

  constructor(private router: Router){}



}
