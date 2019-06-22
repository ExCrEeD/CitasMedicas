import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../Model/user';
import { DoctorCargo } from '../Model/doctor-cargo';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:61568/api/Reporte';
  constructor(private http: HttpClient) 
  { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getTopDoctores()
  {
    return this.http.get<User>(this.accessPointUrl+"/GetTopDoctores",{headers: this.headers});
  }


  public getTopPacientes()
  {
    return this.http.get<User>(this.accessPointUrl+"/GetTopPacientes",{headers: this.headers});
  }
  
  public getTopCargos()
  {
    return this.http.get<DoctorCargo>(this.accessPointUrl+"/GetTopCargos",{headers: this.headers});
  }
}
