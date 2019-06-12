import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorCargosService } from 'src/app/services/doctor-cargos.service';
import {User} from 'src/app/model/User';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'app-doctor-cargos',
  templateUrl: './doctor-cargos.component.html',
  styleUrls: ['./doctor-cargos.component.css']
})
export class DoctorCargosComponent implements OnInit {
  alldoctores$:Observable<User>;
  public myForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private doctorCargoService:DoctorCargosService) { 
    this.getDoctores();
  }
  
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      Descripcion:['',Validators.required],
      ValorHora:['',Validators.required]
  });
  }

  public addCargo=function(event)
  {
    this.doctorCargoService.add(this.myForm.value).subscribe();
    alert("Cargo registrado correctamente");
    this.myForm.reset();
  }

  async getDoctores()
  { 
    this.alldoctores$ =  this.doctorCargoService.getDoctores();
  /*   this.alldoctores$.forEach(element => {
      console.log(element);
  });  */
    
  }
} 
