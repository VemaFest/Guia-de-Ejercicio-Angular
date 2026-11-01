import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { ProductoComponent } from './producto-component/producto-component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'productos', component: ProductoComponent }
];

