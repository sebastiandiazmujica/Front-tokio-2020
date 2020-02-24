import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  params = new HttpParams();


  deportistas:Deportista[]=[];

  comentarios: Comments[] = [];


  private deportistas$ = new BehaviorSubject<Deportista[]>(this.deportistas);
  private comentarios$ = new BehaviorSubject<Comments[]>(this.comentarios);

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      Accept: 'application/json'
    });
  }

  sendRequestLogin(data: any): any {
    const requestData = {
      username: data.usuario,
      password: data.contraseña
    };

    return this.http.post('https://colombia-tokio-grupo4.herokuapp.com/loginUser/', requestData, {headers: this.headers});
  }


  sendRequestRegister(data: any): any {
    const requestData = {
      username: data.username,
      password: data.password,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
    };

    return this.http.post('https://colombia-tokio-grupo4.herokuapp.com/addUser/', requestData, {headers: this.headers});
  }

  GetDeportistas(){
    return this.http.get<Deportista[]>('https://colombia-tokio-grupo4.herokuapp.com/allInfo');
  }

  getDeportista(id: number){
    return this.http.get<Deportista>(`https://colombia-tokio-grupo4.herokuapp.com/infoSportman?id=${id}`);
  }

  getDeportistasDeporte(){
    return this.http.get<Deportista[]>('https://colombia-tokio-grupo4.herokuapp.com/allInfo');
  }

  getDeportistasDeporteModalidad(){
    return this.http.get<Deportista[]>('https://colombia-tokio-grupo4.herokuapp.com/allInfo');
  }

  getParticipaciones(id: number) {
    return this.http.get<Participacion[]>(`https://colombia-tokio-grupo4.herokuapp.com/infoParticipation?id=${id}`);
  }

  getDeportes(){
    return this.http.get<Deporte[]>("https://colombia-tokio-grupo4.herokuapp.com/allSport");
  }

  getModalidades(id: number){
    return this.http.get<Modalidad[]>(`https://colombia-tokio-grupo4.herokuapp.com/allMode?idDeporte=${id}`);
    ;
  }

  saveComment(data: any): any {
    const requestData = {
      username: data.usuario,
      texto: data.texto,
      participacion: data.participacion
    };

    return this.http.post('https://colombia-tokio-grupo4.herokuapp.com/addComment/', requestData, {headers: this.headers});
  }

  getComments(id: number): Observable<Comments[]> {
    return this.comentarios$.asObservable();
    // TOCA CREAR SERVICIO EN DJANGO PARA TRAER LOS COMENTARIOS
    // return this.http.post('https://colombia-tokio-grupo4.herokuapp.com/getComments/', requestData, {headers: this.headers});
  }

}

export interface Deportista {
  idDeportista: number;
  nombre: string;
  apellido: string;
  edad: number;
  peso: number;
  estatura: number;
  foto: string;
  fechanacimiento: string;
  ciudad: string;
  pais: string;
  nombreentrenador: string;
  apellidoentrenador: string;
  nombredelegacion: string;
  icono: string;
  deporte: string;
  modalidadDeporte: string;

}

export interface Participacion {
  idParticipacion: number;
  linkVideo: string;
  deportista_id: number;
  descripcion: string;
  fecha: string;
  resultado: string;
}

export interface Comments {
  id: number;
  texto: string;
  usuario: string;
}

export interface Deporte{
  idDeporte: number;
  nombreDeporte: string;
}

export interface Modalidad{
  idModalidadDeporte: number;
  nombreModalidad: string;
  idDeporte: number;
  nombreDeporte: string;
}
