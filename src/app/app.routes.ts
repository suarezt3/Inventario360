import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { FormRegisterPcComponent } from './components/form-register-pc/form-register-pc.component';
import { TableDevicesComponent } from './components/table-devices/table-devices.component';

export const routes: Routes = [

  { path: '', redirectTo: '/table-inventario', pathMatch: 'full' }, // Redirige a table-inventario por defecto
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form-register-device', component: FormRegisterPcComponent },
  { path: 'table-inventario', component: TableDevicesComponent },
  { path: '**', redirectTo: '/dashboard' },
];
