

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { LoginComponent} from '../../Components/modals/login/login.component';

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

 
}
