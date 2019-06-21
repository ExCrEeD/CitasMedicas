import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../Model/user';
import { DTOCita } from '../Model/dtocita';

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

  public getDoctorCitas(idDoctor)
  {
    return this.http.get<DTOCita>(this.accessPointUrl+
      "/getCitaDoctor?idDoctor="+idDoctor,{headers: this.headers});
  }
  public getPacienteCitas(idPaciente)
  {
    return this.http.get<DTOCita>(this.accessPointUrl+
      "/getCitaPaciente?idPaciente="+idPaciente,{headers: this.headers});
  }

  public add(cita) {
    return this.http.post(this.accessPointUrl,cita, {headers: this.headers});
  }
  
  public citaFinalizada(idCita)
  {
    return this.http.get(this.accessPointUrl+"/getFinalizada?idCita="+idCita,{headers: this.headers})
  }
  
}
