import { Component, OnInit, Input } from '@angular/core';
import { DTOCita } from 'src/app/Model/dtocita';
import { UserService } from 'src/app/Services/user.service';
import { CitaService } from 'src/app/services/cita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-div-cita',
  templateUrl: './div-cita.component.html',
  styleUrls: ['./div-cita.component.css']
})
export class DivCitaComponent implements OnInit {

  public EsDoctor = false;
  @Input() cita:DTOCita;
  constructor(private usr:UserService,private citaServ: CitaService,private router: Router) { 
    
  }

  ngOnInit() {
    this.EsDoctor = this.usr.getMenu().Rol=="Doctor"
  }

  async CitaFinalizada()
  {
    await this.citaServ.citaFinalizada(this.cita.IdCita).subscribe();
    //window.location.reload();
  }
}
