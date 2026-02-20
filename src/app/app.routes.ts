import { Routes } from '@angular/router';
import { MedicoPage } from './pages/medicos/medico-page/medico-page';
import { App } from './app';

export const routes: Routes = [
  {
    component: App,
    title: 'Home',
    path: ""
  },
  {
    component: MedicoPage,
    title: 'Medicos',
    path: "medicos"
  }
];
