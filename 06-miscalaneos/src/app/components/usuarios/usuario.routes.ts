import { Routes } from '@angular/router';
import { UsuariosNuevoComponent } from './usuarios-nuevo.component';
import { UsuariosEditarComponent } from './usuarios-editar.component';
import { UsuariosDetalleComponent } from './usuarios-detalle.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'nuevo', component: UsuariosNuevoComponent },
    { path: 'editar', component: UsuariosEditarComponent },
    { path: 'detalle', component: UsuariosDetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];
