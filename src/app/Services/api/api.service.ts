import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  params = new HttpParams();
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
}
