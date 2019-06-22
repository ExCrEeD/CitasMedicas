import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReporteService } from 'src/app/services/reporte.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user';
import { DoctorCargo } from 'src/app/Model/doctor-cargo';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public arrayTopDoctor$ : Observable<User>;
  public arrayTopPaciente$ : Observable<User>;
  public arrayDoctorCargo$ : Observable <DoctorCargo>;

  constructor(private config: NgbModalConfig, private reporteServicio :ReporteService,
              private modalService: NgbModal) { }

  ngOnInit() {
      this.getTopDoctor();
      this.getTopPaciente();
      this.getTopDoctorCargo();
  }

   //Apertura de modal para registrar nueva Actividad
   open(content) {
    this.modalService.open(content);
  }

  async getTopDoctorCargo() 
  { 
    this.arrayDoctorCargo$ = await this.reporteServicio.getTopCargos();
    this.arrayDoctorCargo$.forEach(element=>{console.log(element)}) ;   
  }
  async getTopDoctor() 
  { 
   
    this.arrayTopDoctor$ = await this.reporteServicio.getTopDoctores();
    this.arrayTopDoctor$.forEach(element=>{console.log(element)}) ;   
  }
  async getTopPaciente() 
  { 
    this.arrayTopPaciente$ = await this.reporteServicio.getTopPacientes();
    this.arrayTopPaciente$.forEach(element=>{console.log(element)}) ;   
  }
  

}
