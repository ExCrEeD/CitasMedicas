import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../Model/user';
import { Menu } from '../Model/menu';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class DoctorCargosService {
  
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:61568/api/doctorCargo';
  /* static instance:UserRegisterService; */
  private loginState = false;

  constructor(private http: HttpClient,private currentUser:User,private userRol:Menu, @Inject(SESSION_STORAGE) private storage: WebStorageService) 
  { 
   /*  UserRegisterService.instance = this; */
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  
  public add(cargo) {
    return this.http.post(this.accessPointUrl,cargo, {headers: this.headers});
  }

  public getDoctores(){
    return this.http.get<User>(this.accessPointUrl+"/getDoctores",{headers: this.headers});    
  }
} 