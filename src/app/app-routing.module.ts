import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login/login.component';

import { RecordsLogsComponent } from './Components/Records/records-logs/records-logs.component';

const routes: Routes = [
  { path: '', redirectTo: '/records', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'records', component: RecordsLogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RecordsLogsComponent]