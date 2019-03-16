import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosNuevoComponent } from './components/usuarios/usuarios-nuevo.component';
import { UsuariosEditarComponent } from './components/usuarios/usuarios-editar.component';
import { UsuariosDetalleComponent } from './components/usuarios/usuarios-detalle.component';

const APP_ROUTER: Routes = [
  { path: 'home', component: HomeComponent },
  {
      path: 'usuario/:id',
      component: UsuariosComponent,
      children: [
          { path: 'nuevo', component: UsuariosNuevoComponent },
          { path: 'editar', component: UsuariosEditarComponent },
          { path: 'detalle', component: UsuariosDetalleComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
      ]
   },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER);
