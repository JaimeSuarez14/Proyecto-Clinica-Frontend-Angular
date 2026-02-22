import { Routes } from '@angular/router';
import { MedicoPage } from './pages/medicos/medico-page/medico-page';
import { Home } from './pages/home/home';
import { PacientePage } from './pages/pacientes/paciente-page/paciente-page';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: Home,
  },
  {
    path: 'medicos',
    title: 'Medicos',
    component: MedicoPage,
  },
  {

    path: 'pacientes',
    title: 'Pacientes',
    component: PacientePage,

  },
  {
    path:"**",
    redirectTo:"/",
    pathMatch:"full"
  }
];
