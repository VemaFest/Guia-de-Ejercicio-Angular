import { Component } from '@angular/core';
import { LogoutComponent } from '../logout-component/logout-component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Estudiante {
  id: number;
  cuenta: string;
  nombre: string;
  carrera: string;
  fechaingreso: string;
}

@Component({
  imports: [LogoutComponent, FormsModule],
  selector: 'app-estudiante-component',
  styleUrl: './estudiante-component.css',
  templateUrl: './estudiante-component.html',
})
export class EstudianteComponent {
  estudiantes: Estudiante[] = [];
  estudiante: Estudiante = { id: 0, cuenta: '', nombre: '', carrera: '', fechaingreso: '' };

  constructor(private router: Router) {}

  agregarEstudiante() {
    if (this.estudiante.cuenta && this.estudiante.nombre && this.estudiante.carrera && this.estudiante.fechaingreso) {
      this.estudiante.id = this.estudiantes.length > 0 ? Math.max(...this.estudiantes.map(e => e.id)) + 1 : 1;
      this.estudiantes.push({ ...this.estudiante });
      this.resetearFormulario();
    } else {
      alert('Por favor, complete todos los campos antes de agregar un estudiante.');
    }
  }

  resetearFormulario() {
    this.estudiante = { id: 0, cuenta: '', nombre: '', carrera: '', fechaingreso: '' };
  }
}
