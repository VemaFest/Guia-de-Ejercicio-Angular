import { Component } from '@angular/core';
import { LogoutComponent } from '../logout-component/logout-component';

@Component({
  imports: [LogoutComponent],
  selector: 'app-producto-component',
  styleUrl: './producto-component.css',
  templateUrl: './producto-component.html',
})
export class ProductoComponent {}
