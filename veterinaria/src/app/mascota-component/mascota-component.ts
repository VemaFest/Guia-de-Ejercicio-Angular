import { Component } from '@angular/core';
import { LogoutComponent } from '../logout-component/logout-component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  edad: number;
  propietario: string;
}

@Component({
  imports: [LogoutComponent, FormsModule],
  selector: 'app-mascota-component',
  styleUrl: './mascota-component.css',
  templateUrl: './mascota-component.html',
})
export class MascotaComponent {
  mascotas: Mascota[] = [];
  mascota: Mascota = {id: 0, nombre: '', especie: '', edad: 0, propietario: ''}
  indexEdit: number = -1

  constructor(private router: Router){
    this.router.navigate([localStorage.getItem('sesionVeterinaria') ? '/mascotas' : '/login'])
    this.mascotas = JSON.parse(localStorage.getItem('mascotas') ?? '[]');  
  }

  formulario() {
    const m = this.mascota;
    if(!m.nombre || !m.especie || !Number.isInteger(m.edad) || m.edad < 0 || !m.propietario)
      return alert("Complete todos los campos correctamente");
    
    this.indexEdit === -1 ? this.registrarMascota(m) : this.actualizarMascota(m);
    localStorage.setItem('mascotas', JSON.stringify(this.mascotas))
  }

  registrarMascota(m: Mascota) {
    m.id = this.mascotas.reduce((max, x) => Math.max(max, x.id), 0) + 1;
    this.mascotas.push(m);
  }
  actualizarMascota(m: Mascota) {
    Object.assign(this.mascotas[this.indexEdit], m)
    this.indexEdit = -1
  }

  editarMascota(index: number){
    this.indexEdit = index;
    this.mascota = {...this.mascotas[index]};
  }

  refrescarMascota(){
      this.mascota = {id: 0, nombre: '', especie: '', edad: 0, propietario: ''}
      this.indexEdit = -1
  }
}
