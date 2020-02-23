import { Component, OnInit } from '@angular/core';
import {ModalServiceService} from '../../Services/modalService/modal-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isLogueado: boolean;
  private username: string;
  constructor(private ModalServiceService: ModalServiceService) {

    this.isLogueado = false;
    this.username = '';
  }

  ngOnInit() {
  }

  OpenLogin(): void {
    this.ModalServiceService.LoginDialog({title: '', description: ''}).afterClosed().subscribe((res: any) => {
      console.log(res);
      this.username = res.username;
      this.isLogueado = res.login;
      }
     );
   }

   OpenRegister(): void {
     // tslint:disable-next-line:max-line-length
     this.ModalServiceService.RegisterDialog({title: '', description: ''}).afterClosed().subscribe((res: {username: string, login: boolean}) => {
          this.username = res.username;
          this.isLogueado = res.login;
       }
      );
    }

}
