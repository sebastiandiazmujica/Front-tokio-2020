import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  usuario: string = "";

  setUsuario(usuario: string) {
    this.usuario = usuario;
  }

  getUsuario() {
    return(this.usuario);
  }
}
