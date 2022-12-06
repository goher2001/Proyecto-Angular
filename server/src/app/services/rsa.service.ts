import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RsaService {


 
 
  constructor(private http: HttpClient) {} 


Registrar(json:string):Observable<any>{
  return this.http.post<any>('http://localhost:3000/registrar',json)
 }

 Firmar(mensaje:bigint,username:string):Observable<any>{
  return this.http.get<any>('http://localhost:3000/validar/'+mensaje+'/'+username)
 }
/*
 AddDiego(prueba:string,prueba2:string):Observable<any>{
  return this.http.get<any>('http://localhost:3000/validar/'+prueba+'/'+prueba2)
 }
 AddJaskie():Observable<any>{
  return this.http.get<any>('http://localhost:3000/AddJaskie')
 }
*/

}
