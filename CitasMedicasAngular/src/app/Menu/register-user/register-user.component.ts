import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators,AbstractControl} from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Observable, empty } from 'rxjs';
import {DoctorCargo} from 'src/app/Model/doctor-cargo';
import { User } from 'src/app/Model/user';
import { DoctorCargosService } from 'src/app/services/doctor-cargos.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
 
  allcargos$:Observable<DoctorCargo>;
  public myForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private usrregister:UserService, 
        private doctorCargoService:DoctorCargosService) { }
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      Name:['',Validators.required],
      SecondName:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      Password:['',Validators.required],
      Cargo:['',Validators.required]
    });
    this.getCargos();
    let estadoUsuario = this.usrregister.getLoginState();
    console.log(estadoUsuario);
  }

  public addUser=function(event)
  {
   var user = new User();
    user = <User>this.myForm.value;
    user.Rol="Doctor";  
    this.usrregister.add(user).subscribe();
    alert("usuario registrado correctamente");
    this.myForm.reset();
  }
  
  async getCargos()
  { 
    this.allcargos$ = this.doctorCargoService.getAllCargos();
   // this.allcargos$.forEach(element=>{console.log(element)}) ;   
  }
  
}
