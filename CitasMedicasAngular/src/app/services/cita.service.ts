import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:61568/api/cita';
  constructor(private http: HttpClient) 
  { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getDoctoresPorIdCargo(idCargo)
  {
    return this.http.get<User>(this.accessPointUrl+"/getDoctoresPorIdCargo?idCargo="+idCargo,{headers: this.headers});
  }

  public geHorasDisponiblesDoctor(idDoctor,fecha)
  {
    return this.http.get<number>(this.accessPointUrl+
      "/getHorasDisponiblesDoctor?idDoctor="+idDoctor+
      "&fecha="+fecha,{headers: this.headers});
  }

  public add(user) {
    return this.http.post(this.accessPointUrl,user, {headers: this.headers});
  }
  
}
