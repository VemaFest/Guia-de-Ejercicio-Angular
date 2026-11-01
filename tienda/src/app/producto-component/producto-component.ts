import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutComponent } from '../logout-component/logout-component';
import { CommonModule } from '@angular/common';


interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  precio: number;
  existencias: number;
  softdelete: boolean;
}

@Component({
  imports: [LogoutComponent,CommonModule],
  selector: 'app-producto-component',
  styleUrl: './producto-component.css',
  templateUrl: './producto-component.html',
})
export class ProductoComponent {
  productos: Producto[] = [
    {
      id: 1,
      codigo: 'P001',
      nombre: 'Cuaderno',
      precio: 35.50,
      existencias: 20,
      softdelete: false
    },
    {
      id: 2,
      codigo: 'P002',
      nombre: 'Lápiz',
      precio: 8.00,
      existencias: 0,
      softdelete: false
    }
  ];

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





}
