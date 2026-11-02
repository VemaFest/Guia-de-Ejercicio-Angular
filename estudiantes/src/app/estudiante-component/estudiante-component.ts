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
  index: number = -1;

  constructor(private router: Router) {}

  agregarEstudiante() {
    if (this.estudiante.cuenta && this.estudiante.nombre && this.estudiante.carrera && this.estudiante.fechaingreso) {
      if (this.index === -1) {
        // Agregar un nuevo estudiante
        this.estudiante.id = this.estudiantes.length > 0 ? Math.max(...this.estudiantes.map(e => e.id)) + 1 : 1;
        this.estudiantes.push({ ...this.estudiante });
      } else {
        // Actualizar el estudiante existente
        this.estudiantes[this.index] = { ...this.estudiante, id: this.estudiantes[this.index].id };
        this.index = -1;
      }
      localStorage.setItem('estudiantes', JSON.stringify(this.estudiantes));
      this.resetearFormulario();
    } else {
      alert('Por favor, complete todos los campos antes de agregar un estudiante.');
    }
  }

  resetearFormulario() {
    this.estudiante = { id: 0, cuenta: '', nombre: '', carrera: '', fechaingreso: '' };
  }

  actualizarEstudiante(index: number) {
    this.index = index;
    this.estudiante = { ...this.estudiantes[index] };
  }

  eliminarEstudiante(index: number) {
    this.estudiantes.splice(index, 1);
    localStorage.setItem('estudiantes', JSON.stringify(this.estudiante)); 
    this.resetearFormulario();
  }

  

}
