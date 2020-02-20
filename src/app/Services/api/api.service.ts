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

  sendRequestProcess(data: any):any {
    const requestData = {
      username: data.usuario,
      password: data.contraseña
    };

    return this.http.post('http://127.0.0.1:8000/loginUser/', requestData, {headers: this.headers});
  }
}
