import { Component } from '@angular/core';
import { LogoutComponent } from '../logout-component/logout-component';

interface Estudiante {
  id: number;
  cuenta: string;
  nombre: string;
  carrera: string;
  fechaingreso: string;
}

@Component({
  imports: [LogoutComponent],
  selector: 'app-estudiante-component',
  styleUrl: './estudiante-component.css',
  templateUrl: './estudiante-component.html',
})
export class EstudianteComponent {
  estudiantes: Estudiante[] = [
    { id: 1, cuenta: '0000001', nombre: 'Ana Ejemplo', carrera: 'Ingeniería en Sistemas', fechaingreso: '2026-09-14' }, 
    { id: 2, cuenta: '0000002', nombre: 'Luis Ejemplo', carrera: 'Administración', fechaingreso: '2026-09-15' }
  ];

}
