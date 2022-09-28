import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login/login.component';
import { FormsLogsComponent } from './Components/Forms/forms-logs/forms-logs.component';
import { RecordsLogsComponent } from './Components/Records/records-logs/records-logs.component';

const routes: Routes = [
  { path: '', redirectTo: '/records', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forms', component: FormsLogsComponent },
  { path: 'records', component: RecordsLogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, FormsLogsComponent, RecordsLogsComponent]