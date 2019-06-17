import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Menu/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './Menu/register-user/register-user.component';
import { ReportsComponent } from './Menu/reports/reports.component';


import { AuthLoginService } from './services/auth-login.service';
import { DoctorCargosComponent } from './menu/doctor-cargos/doctor-cargos.component';
import { RegisterPacienteComponent } from './register-paciente/register-paciente.component';
import {AgendarCitasComponent} from './Menu/agendar-citas/agendar-citas.component';
import {ConsultarCitasComponent} from './Menu/consultar-citas/consultar-citas.component';

const routes: Routes = [
 {path:'',component:LoginComponent},
 {path:'login',component:LoginComponent},
 /* {path:'Home',component:HomeComponent,canActivate:[AuthLoginService]}, */
 {path:'Home',component:HomeComponent,canActivate:[AuthLoginService]},
 {path:'Register',component:RegisterUserComponent },
 {path:'Report',component:ReportsComponent ,canActivate:[AuthLoginService]},
 {path:'Cargo', component : DoctorCargosComponent, canActivate:[AuthLoginService]},
 {path:'AgendarCita', component : AgendarCitasComponent, canActivate:[AuthLoginService]},
 {path:'ConsultarCita', component : ConsultarCitasComponent, canActivate:[AuthLoginService]},
 {path:'Register-Paciente', component: RegisterPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
