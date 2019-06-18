import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { DoctorCargosService } from 'src/app/services/doctor-cargos.service';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})
export class AgendarCitasComponent implements OnInit {

  public doctorDisabled = true;
  public fechaDisabled = true;
  public horaDisabled = true;
  public myForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private usrregister:UserService, 
        private doctorCargoService:DoctorCargosService) { }
        
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      Area:['',Validators.required],
      IdDoctor:['',Validators.required],
      Fecha:['',Validators.required],
      Hora:['',Validators.required]
    });
  }

}
