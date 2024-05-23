import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandComponent } from './demand/demand.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'demand', component: DemandComponent },
      { path: 'email', component: EmailComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'support', component: SupportComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  // wildcard route
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
