import { Component, OnInit } from '@angular/core';
import { DTOCita } from 'src/app/Model/dtocita';
import { Observable } from 'rxjs';
import { CitaService } from 'src/app/services/cita.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-consultar-citas',
  templateUrl: './consultar-citas.component.html',
  styleUrls: ['./consultar-citas.component.css']
})
export class ConsultarCitasComponent implements OnInit {

  allCitas$ : Observable<DTOCita>;
  constructor(private citaService:CitaService,private userService:UserService) { this.getCitas()}
  public countCitas = 0;
  ngOnInit() {
  }

  async getCitas()
  {
    console.log(this.userService.getMenu())
    if(this.userService.getMenu().Rol == "Doctor")
    {
      this.allCitas$ = await this.citaService.getDoctorCitas(this.userService.getUserId());
    }
    else
    {
      this.allCitas$ = await this.citaService.getPacienteCitas(this.userService.getUserId());
    }
    this.allCitas$.forEach(element=>{
        this.countCitas=this.countCitas+1;     
    });
  }
}
