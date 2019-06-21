import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { DoctorCargosService } from 'src/app/services/doctor-cargos.service';
import { DISABLED } from '@angular/forms/src/model';
import { Observable } from 'rxjs';
import { DoctorCargo } from 'src/app/Model/doctor-cargo';
import { User } from 'src/app/Model/user';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/Model/cita';

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
  arrayDoctorCargo$:Observable<DoctorCargo>;
  arrayDoctores$:Observable<User>;
  arrayHorasDisponibles$:Observable<number>;

  constructor(private formBuilder:FormBuilder,private usrregister:UserService, 
        private doctorCargoService:DoctorCargosService, private citaServ: CitaService) {
          
         }
        
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      Area:['',Validators.required],
      IdDoctor:[{value: '', disabled: true},Validators.required],
      Fecha:[{value: '', disabled: true},Validators.required],
      Hora:[{value: '', disabled: true},Validators.required]
    });

    this.getCargos();
  }


  async getCargos() 
  { 
    this.arrayDoctorCargo$ = await this.doctorCargoService.getAllCargos();
  }

  async clickAreas(){
    console.log("asd");
    this.myForm.controls["IdDoctor"].enable();
    var cita = new Cita();
    cita = <Cita>this.myForm.value;         
   if (cita.Area!= undefined){ 
     this.arrayDoctores$ = await this.citaServ.getDoctoresPorIdCargo(cita.Area)
    }  
 }

  public clickDoctor(){
    this.myForm.controls["Fecha"].enable();
  }

  public clickFecha()
  {
    this.myForm.controls["Hora"].enable();
  }
  
  
  async  focusout(){ 
    var cita = new Cita();
     cita = <Cita> this.myForm.value;
        this.arrayHorasDisponibles$ = await this.citaServ.geHorasDisponiblesDoctor(cita.IdDoctor,cita.Fecha);   
  }

  async addCita()
  {
    var cita = new Cita();
    cita = <Cita> this.myForm.value;
    cita.IdPaciente = this.usrregister.getUserId();
    await this.citaServ.add(cita).subscribe();
    alert("Cita agendada correctamente");
     this.myForm.reset();
  }
  
}
