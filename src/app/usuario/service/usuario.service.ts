import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

const baseUrl = 'http://localhost:8080/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseUrl);
  }

  get(id: any): Observable<Usuario> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    data.telefone = data.telefone.replace(/[^0-9]/g, '')
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    data.telefone = data.telefone.replace(/[^0-9]/g, '');
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }



}