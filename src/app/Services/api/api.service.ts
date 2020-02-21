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


  deportistas:Deportista[]=[{apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},
  {apellido:"lopez",nombre:"felipe",foto:"model/static/images/nadador.jpg",icono:"model/static/images/Futbol.png"},];


  private deportistas$ = new BehaviorSubject<Deportista[]>(this.deportistas);


  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    });
  }

  sendRequestLogin(data: any):any {
    const requestData = {
      username: data.usuario,
      password: data.contraseña
    };

    return this.http.post('https://colombia-tokio-grupo4.herokuapp.com/loginUser/', requestData, {headers: this.headers});
  }


  sendRequestRegister(data: any):any {
    const requestData = {
      username: data.username,
      password: data.password,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
    };

    return this.http.post('https://colombia-tokio-grupo4.herokuapp.com/addUser/', requestData, {headers: this.headers});
  }

  GetDeportistas():Observable<Deportista[]> {

    
    return this.deportistas$.asObservable();
    //TOCA CREAR SERVICIO EN DJANGO PARA TRAER LOS DEPORTISTAS
    //return this.http.post('https://colombia-tokio-grupo4.herokuapp.com/addUser/', requestData, {headers: this.headers});
  }
}

export interface Deportista{
  nombre:string,
  apellido:string,
  foto:string,
  icono:string
}