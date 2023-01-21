import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { entrada } from '../model/entrada';
import { peticion } from '../model/peticion';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RsaService {

  
 
 
  constructor(private http: HttpClient) {} 




 newUser(user: User): Observable<User> {
  return this.http.post<User>('http://localhost:3000/api/user/registro', user, httpOptions);
}
login(name:string,pass:string): Observable<User> {
  return this.http.get<User>('http://localhost:3000/api/user/login/'+name+'/'+pass, httpOptions);
}

getEntradas(): Observable<entrada[]> {
  return this.http.get<entrada[]>('http://localhost:3000/api/entradas/listAll/', httpOptions);
}

getEntradasUser(name:string|null): Observable<entrada[]> {
  return this.http.get<entrada[]>('http://localhost:3000/api/entradas/list/'+name, httpOptions);
}

getEntradasOtros(name:string|null): Observable<entrada[]> {
  return this.http.get<entrada[]>('http://localhost:3000/api/entradas/listOtros/'+name, httpOptions);
}

getPeticiones(name:string|null): Observable<peticion[]> {
  return this.http.get<peticion[]>('http://localhost:3000/api/peticion/listAll/'+name, httpOptions);
}

comprarEntrada(name:string|null,vendedorname:string): Observable<entrada[]> {
  return this.http.post<entrada[]>('http://localhost:3000/api/entradas/comprar/'+name+'/'+vendedorname, httpOptions);
}


 Firmar(mensaje:bigint,username:string):Observable<any>{
  return this.http.get<any>('http://localhost:3000/validar/'+mensaje+'/'+username)
 }


}
