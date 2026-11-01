import { Component } from '@angular/core';
import { LogoutComponent } from '../logout-component/logout-component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


interface Libro {
  id: number;
  codigo: string;
  titulo: string;
  autor: string;
  anio: number;
  softdelete: boolean;
}

@Component({
  imports: [LogoutComponent, FormsModule],
  selector: 'app-libro-component',
  styleUrl: './libro-component.css',
  templateUrl: './libro-component.html',
})
export class LibroComponent {
  libros: Libro[] = [];
  libro: Libro = {
    id: 0,
    codigo: '',
    titulo: '',
    autor: '',
    anio: 0,
    softdelete: false,
  };
  index: number = -1;

  constructor(private router: Router) {
    localStorage.getItem('sesionBiblioteca') ? this.router.navigate(['/libro']) : this.router.navigate(['/login']);
    const librosGuardados = localStorage.getItem('libros');
    if (librosGuardados) {
      this.libros = JSON.parse(librosGuardados);
    }
  }

  agregarLibro() {
    if (this.libro.codigo && this.libro.titulo && this.libro.autor && this.libro.anio) {
      if (this.index === -1) {
        // Agregar un nuevo libro
        this.libro.id = this.libros.length > 0 ? Math.max(...this.libros.map(l => l.id)) + 1 : 1;
        this.libros.push({ ...this.libro, softdelete: false });
      } else {
        // Actualizar el libro existente
        this.libros[this.index] = { ...this.libro, id: this.libros[this.index].id, softdelete: false };
        this.index = -1; 
      }
      localStorage.setItem('libros', JSON.stringify(this.libros));
      this.resetLibro();
    }
  }

  editarLibro(index: number) {
    this.index = index;
    this.libro = { ...this.libros[index] };
  }

  cancelarEdicion() {
    this.index = -1;
    this.resetLibro();
  }

  eliminarLibro(index: number) {
    this.libros[index].softdelete = true;
    localStorage.setItem('libros', JSON.stringify(this.libros));
  }

  resetLibro() {
    this.libro = {
      id: 0,
      codigo: '',
      titulo: '',
      autor: '',
      anio: 0,
      softdelete: false,
    };
  }

}
