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


  deportistas:Deportista[]=[
  {id: 1, apellido:"lopez",nombre:"felipe1",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 1, apellido:"lopez",nombre:"felipe1",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 2, apellido:"lopez",nombre:"felipe2",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 3, apellido:"lopez",nombre:"felipe3",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 4, apellido:"lopez",nombre:"felipe4",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 5, apellido:"lopez",nombre:"felipe5",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 6, apellido:"lopez",nombre:"felipe6",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 7, apellido:"lopez",nombre:"felipe7",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 8, apellido:"lopez",nombre:"felipe8",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 9, apellido:"lopez",nombre:"felipe9",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {id: 10, apellido:"lopez",nombre:"felipe10",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
];

  participaciones: Participacion[] = [
    {id: 10, linkVideo: 'https://www.youtube.com/watch?v=x0CJKvevs2M', deportistaId: 10, descripcion: 'dfsdfsd sdf sdfssdf', fecha: '2020-02-09 14:32', resultado: 'sfds sdfsd 3'},
    {id: 10, linkVideo: 'https://www.youtube.com/watch?v=x0CJKvevs2M', deportistaId: 10, descripcion: 'dfsdfsd sdf sdfssdf', fecha: '2020-02-09 14:32', resultado: 'sfds sdfsd 3'},
    {id: 10, linkVideo: 'https://www.youtube.com/watch?v=x0CJKvevs2M', deportistaId: 10, descripcion: 'dfsdfsd sdf sdfssdf', fecha: '2020-02-09 14:32', resultado: 'sfds sdfsd 3'},
    {id: 10, linkVideo: 'https://www.youtube.com/watch?v=x0CJKvevs2M', deportistaId: 10, descripcion: 'dfsdfsd sdf sdfssdf', fecha: '2020-02-09 14:32', resultado: 'sfds sdfsd 3'},
    {id: 10, linkVideo: 'https://www.youtube.com/watch?v=x0CJKvevs2M', deportistaId: 10, descripcion: 'dfsdfsd sdf sdfssdf', fecha: '2020-02-09 14:32', resultado: 'sfds sdfsd 3'},

  ];

  deportes: any [] = [
    {nombre:"Futbol"},
    {nombre:"Tenis"},
    {nombre:"Natacion"},
  ];

  modalidades: any [] = [
    {nombreModalidad:"Futbol 11", nombreDeporte: "Futbol"},
    {nombreModalidad:"Acuática", nombreDeporte: "Gimnasia"},
    {nombreModalidad:"Futbol 5", nombreDeporte: "Futbol"},
  ];

  comentarios: Comments[] = [
    {id: 10, texto: 'com1', usuario: '123'},
    {id: 10, texto: 'com2', usuario: '123'},
    {id: 10, texto: 'com3', usuario: '123'},
  ];


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

  GetDeportistas(): Observable<Deportista[]> {


    return this.deportistas$.asObservable();
    // TOCA CREAR SERVICIO EN DJANGO PARA TRAER LOS DEPORTISTAS
    // return this.http.post('https://colombia-tokio-grupo4.herokuapp.com/addUser/', requestData, {headers: this.headers});
  }

  getDeportistasDeporte(deporte: string){
    return this.deportistas.filter( item => item.nombre === 'felipe1'); // filtrar para el deporte
  }

  getDeportistasDeporteModalidad(modalidadItem: any){
    return this.deportistas.filter( item => item.nombre === 'felipe2'); //filtrar para el deporte y la modalidad
  }

  getDeportista(id: number){
    return this.deportistas.find( item => id == item.id);
  }

  getParticipaciones(id: number) {
    return this.participaciones;
  }

  getDeportes(){
    return this.deportes;
  }

  getModalidades(nombreDeporte: string){
    return this.modalidades.filter(item => item.nombreDeporte === nombreDeporte);
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
  id: number;
  nombre: string;
  apellido: string;
  // edad: number;
  // peso: number;
  // estatura: number;
  foto: string;
  icono: string;
  // fechaNacimiento: string;
  // ciudad: string;
  // pais: string;
  // nombreEntrenador: string;
  // apellidoEntrenador: string;
  // nombreDelegacion: string;
}

export interface Participacion {
  id: number;
  linkVideo: string;
  deportistaId: number;
  descripcion: string;
  fecha: string;
  resultado: string;
}

export interface Comments {
  id: number;
  texto: string;
  usuario: string;
}
