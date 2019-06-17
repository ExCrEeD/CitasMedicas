import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { Menu } from 'src/app/Model/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showReportComponent = false;
  public showUserOption = false;
  public showDeleteAccount = false;
  public showRegisterUser = false;
  public showCrearCargo = false;
  public showAgendarCita = false;
  public showConsultarCita = false;
  public user = "";
  constructor(private userService:UserService,private router: Router,private menu:Menu) {
     this.user = userService.getUserName(); 
     this.menu = userService.getMenu();
     console.log(this.menu);
   }

  ngOnInit() { 
    this.navigateComponent('ScrollDebate');
  }
  
  public navigateComponent(componente)
  {
    this.showReportComponent = false;
    this.showUserOption = false;
    this.showDeleteAccount = false;
    this.showRegisterUser = false;
    this.showCrearCargo = false;
    this.showAgendarCita = false;
    this.showConsultarCita=false;

    switch(componente)
    {
        case 'Report':{this.showReportComponent = true;break;}
        case 'User':{this.showUserOption=true;break;}
        case 'DeleteAccount':{this.showDeleteAccount=true;break;}
        case 'RegisterUser':{this.showRegisterUser=true;}break;
        case 'Cargo':{this.showCrearCargo =true}break;

    }
  };

  public signOut()
  {  
    this.userService.logOut();
    this.router.navigate(['/login']);
  }
}
