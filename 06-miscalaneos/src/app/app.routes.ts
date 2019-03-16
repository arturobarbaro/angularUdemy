import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { USUARIO_ROUTES } from './components/usuarios/usuario.routes';

const APP_ROUTER: Routes = [
  { path: 'home', component: HomeComponent },
  {
      path: 'usuario/:id',
      component: UsuariosComponent,
      children: USUARIO_ROUTES
   },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER);
