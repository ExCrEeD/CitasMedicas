import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { Menu } from '../Model/menu';

@Component({
  selector: 'app-register-paciente',
  templateUrl: './register-paciente.component.html',
  styleUrls: ['./register-paciente.component.css']
})
export class RegisterPacienteComponent implements OnInit {


  public myForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private usrService:UserService,private router: Router,
        private usrregister:UserService,private currentUser:User,private menuUser:Menu) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      Name:['',Validators.required],
      SecondName:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      Password:['',Validators.required],
     
    });
  }

  public login()
  {
     this.router.navigate(['/login']);
  }
  
  public addUserPaciente=function(event)
  {
   var user = new User();
    user = <User>this.myForm.value;
    user.Rol="Paciente";  

    this.usrregister.add(user).subscribe();
    alert("usuario registrado correctamente");
    this.myForm.reset();
  }
}
