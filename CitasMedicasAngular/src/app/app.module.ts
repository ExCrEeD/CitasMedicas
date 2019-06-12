/* imports por defecto */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* imports aplicacion */
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StorageServiceModule } from 'angular-webstorage-service';

/* Componentes */
import { HomeComponent } from './Menu/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './Menu/register-user/register-user.component';
import { ReportsComponent } from './Menu/reports/reports.component';
/* Modelos */
import {User} from './Model/user';
import {Response} from './Model/response';
import {Comment} from './Model/comment';
import {Menu} from './Model/menu';
import {Rating} from './Model/rating';
/* Servicios */
import { UserService } from './Services/user.service';
import { DeleteAccountComponent } from './Menu/User/delete-account/delete-account.component';
import { LocalStorageService } from './Services/local-storage.service';
import { DoctorCargosComponent } from './menu/doctor-cargos/doctor-cargos.component';
import { DoctorCargosService } from './services/doctor-cargos.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterUserComponent,
    ReportsComponent,
    DeleteAccountComponent,
    DoctorCargosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    StorageServiceModule,
     
  ],
  providers: [UserService,User,Response,Comment,Menu,Rating, DoctorCargosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
