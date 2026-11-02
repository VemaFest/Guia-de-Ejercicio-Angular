import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { MascotaComponent } from './mascota-component/mascota-component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'mascotas', component: MascotaComponent}
];
