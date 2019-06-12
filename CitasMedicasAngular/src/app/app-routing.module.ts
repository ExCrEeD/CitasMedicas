import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Menu/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './Menu/register-user/register-user.component';
import { ReportsComponent } from './Menu/reports/reports.component';


import { AuthLoginService } from './services/auth-login.service';
import { DoctorCargosComponent } from './menu/doctor-cargos/doctor-cargos.component';

const routes: Routes = [
 {path:'',component:LoginComponent},
 {path:'login',component:LoginComponent},
 /* {path:'Home',component:HomeComponent,canActivate:[AuthLoginService]}, */
 {path:'Home',component:HomeComponent,canActivate:[AuthLoginService]},
 {path:'Register',component:RegisterUserComponent },
 {path:'Report',component:ReportsComponent ,canActivate:[AuthLoginService]},
 {path: 'Cargo', component : DoctorCargosComponent, canActivate:[AuthLoginService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
