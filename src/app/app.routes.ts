import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'tasks',
    loadComponent: () => import('./pages/tasks-page/tasks-page').then((m) => m.TasksPage),
  },
  {
    path: 'device',
    loadComponent: () => import('./pages/device-info/device-info').then((m) => m.DeviceInfo),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
