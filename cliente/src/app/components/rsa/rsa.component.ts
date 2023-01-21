import { Component, OnInit } from '@angular/core';
import { entrada } from 'src/app/model/entrada';
import { peticion } from 'src/app/model/peticion';
import { RsaService } from 'src/app/services/rsa.service';

@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.css']
})
export class RsaComponent implements OnInit {
  
entradasCompradas: entrada[] =[];
entradasPlataforma: entrada[] =[];
peticionesRecibidas: peticion[]=[];
principalBool:boolean=true;
ventaPlataforma:boolean=false;
ventaUsuario:boolean=false;

  constructor(private RSAService: RsaService) { 


  }

  ngOnInit(): void {

    this.getEntradasUser();
    this.getEntradasPlataforma();
    this.getPeticiones();

  }

  async getEntradasUser(){
    let name = localStorage.getItem('username')

    this.RSAService.getEntradasUser(name).subscribe(

      async data=>{
        this.entradasCompradas = data;
      }
    )
  }

  async getPeticiones(){
    let name = localStorage.getItem('username')

    this.RSAService.getPeticiones(name).subscribe(

      async data=>{
        this.peticionesRecibidas = data;
      }
    )
  }
  async getEntradasPlataforma(){
    let name = localStorage.getItem('username')

    this.RSAService.getEntradasOtros(name).subscribe(

      async data=>{
        this.entradasPlataforma = data;
      }
    )
  }

  async comprarEntrada(i:number){
    let name = localStorage.getItem('username');
    console.log(i)
    this.RSAService.comprarEntrada(name,this.entradasPlataforma[i].propietarioname).subscribe(
      async data=>{
        this.entradasPlataforma.splice(i,1);
      }
    )
    this.entradasPlataforma.splice(i,1);
    
  }

  async setPrincipal(){
    this.principalBool=true;
    this.ventaPlataforma=false;
    this.ventaUsuario=false;
  }
  async setPlataforma(){
    this.principalBool=false;
    this.ventaPlataforma=true;
    this.ventaUsuario=false;
  }
  async setUsuario(){
    this.principalBool=false;
    this.ventaPlataforma=false;
    this.ventaUsuario=true;
  }
}
