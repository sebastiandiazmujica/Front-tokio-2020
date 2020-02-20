

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { LoginComponent} from '../../Components/modals/login/login.component';
import { RegisterComponent} from '../../Components/modals/register/register.component';

/**
 * Servicio dedicado a controlar modales globales
 * y la notificación de los mismos
 */
@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  /**
   * Subject para controlar el estado de cualquier
   * modal abierto
   */
  modalNotifier = new Subject();

  constructor(
    private dialog: MatDialog
  ) { }


  notifyModalOpening(modalType: any, data?: any) {
    this.modalNotifier.next({
      modalType,
      data
    }); 
  }


  LoginDialog({ title, description }: { title?: string; description?: string; } = {}) {
    return this.dialog.open(LoginComponent, {
      data: {
        type: "",
        title,
        description
      }
    });
  }

  RegisterDialog({ title, description }: { title?: string; description?: string; } = {}) {
    return this.dialog.open(RegisterComponent, {
      data: {
        type: "",
        title,
        description
      }
    });
  }

 
}
