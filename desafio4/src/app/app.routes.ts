import { Routes } from '@angular/router';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { Page404Component } from "./components/page404/page404.component";

export const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent,
    pathMatch: 'full'
  },
  {
    path: 'descripcion/:id',
    component: DescripcionComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component,
  },
];
