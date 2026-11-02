import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutComponent } from '../logout-component/logout-component';
import { FormsModule } from '@angular/forms';


interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  precio: number;
  existencias: number;
  softdelete: boolean;
}

@Component({
  imports: [LogoutComponent,FormsModule],
  selector: 'app-producto-component',
  styleUrl: './producto-component.css',
  templateUrl: './producto-component.html',
})
export class ProductoComponent {
  productos: Producto[] = [];
  producto: Producto = {
    id: 0,
    codigo: '',
    nombre: '',
    precio: 0,
    existencias: 0,
    softdelete: false
  };
  index: number = -1;

  constructor(private router: Router) {
    localStorage.getItem('sesionTienda') ? this.router.navigate(['/productos']) : this.router.navigate(['/login']);
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
      this.productos = JSON.parse(productosGuardados);
    }
   }

   crearProducto() {
    if (this.producto.codigo && this.producto.nombre && this.producto.precio > 0 && this.producto.existencias >= 0) {
      if (this.index === -1) {
        // Agregar un nuevo producto
        this.producto.id = this.productos.length > 0 ? Math.max(...this.productos.map(p => p.id)) + 1 : 1;
        this.productos.push({ ...this.producto, softdelete: false });
      } else {
        // Actualizar el producto existente
        this.productos[this.index] = { ...this.producto, id: this.productos[this.index].id, softdelete: false };
        this.index = -1; 
      }
      localStorage.setItem('productos', JSON.stringify(this.productos));
      this.resetProducto();
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
  resetProducto() {
    this.producto = {
      id: 0,
      codigo: '',
      nombre: '',
      precio: 0,
      existencias: 0,
      softdelete: false
    };
  }
  cancelarEdicion() {
    this.index = -1;
    this.resetProducto();
  }
  
  editarProducto(index: number) {
    this.index = index;
    this.producto = { ...this.productos[index] };
  }



}
