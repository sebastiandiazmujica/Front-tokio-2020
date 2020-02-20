import { Component } from '@angular/core';
import {ModalServiceService} from '../app/Services/modalService/modal-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tokioFront';
  private isLogueado:boolean;
  private username:string;
  constructor(private ModalServiceService:ModalServiceService){

    this.isLogueado=false;
    this.username="";
  }

  OpenLogin():void{
   this.ModalServiceService.LoginDialog({title:"",description:""}).afterClosed().subscribe((res:{username:string,login:boolean})=>
     {
        this.username=res.username;
        this.isLogueado=res.login;
     }
    );
  }
}


