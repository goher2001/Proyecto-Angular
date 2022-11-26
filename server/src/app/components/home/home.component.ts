import { Component } from '@angular/core';
import { RsaService } from 'src/app/services/rsa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private pruebaService: RsaService){

  }
  
  RSAPublicKey: any[] = [ 
    {
      id: 0,
      name: 'Christian Gonzalez',
      age: 21, 
    
   
    },
  ]
  async EliminarLinea(i:number){
    this.RSAPublicKey.splice(i-1,1)
  }
  async AddFerran(){

    this.pruebaService.AddFerran().subscribe(

      async data=>{
        this.RSAPublicKey.push(data)
        console.log(this.RSAPublicKey)
      }
    )
  }

  async AddJaskie(){

    this.pruebaService.AddJaskie().subscribe(

      async data=>{
        this.RSAPublicKey.push(data)
        console.log(this.RSAPublicKey)
      }
    )
  }

  async AddDiego(){

    this.pruebaService.AddDiego().subscribe(

      async data=>{
        this.RSAPublicKey.push(data)
        console.log(this.RSAPublicKey)
      }
    )
  }
}
