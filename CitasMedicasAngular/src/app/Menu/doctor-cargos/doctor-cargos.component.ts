import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorCargosService } from 'src/app/services/doctor-cargos.service';
import {User} from 'src/app/model/User';
import { Observable, empty } from 'rxjs';
import {DoctorCargo} from 'src/app/Model/doctor-cargo';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-doctor-cargos',
  templateUrl: './doctor-cargos.component.html',
  styleUrls: ['./doctor-cargos.component.css']
})
export class DoctorCargosComponent implements OnInit {
  alldoctores$:Observable<User>;
  arrayDoctorCargo$:Observable<DoctorCargo>;
  public myForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private doctorCargoService:DoctorCargosService) { 
    this.getDoctores();
  }
  
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      Descripcion:['',Validators.required],
      ValorHora:['',Validators.required]
    });
    this.list();
  }

  async list() 
  { 
    this.arrayDoctorCargo$ = this.doctorCargoService.getAllCargos();
    //this.arrayDoctorCargo$.forEach(element=>{console.log(element)}) ;   
  }

  public addCargo(doctor)
  {
    this.doctorCargoService.add(this.myForm.value).subscribe();
    alert("Cargo registrado correctamente");
    this.myForm.reset();
    this.list();
  }

  async getDoctores()
  { 
    this.alldoctores$ =  this.doctorCargoService.getDoctores();
  /*   this.alldoctores$.forEach(element => {
      console.log(element);
  });  */    
  }

  async DeleteCargo(idCargo: number) {
    await this.doctorCargoService.DeleteCargo(idCargo).toPromise();  
    alert("Cargo Eliminado");
    this.list();
  }
} 
