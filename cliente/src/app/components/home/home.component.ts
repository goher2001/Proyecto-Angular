import { Component } from '@angular/core';
import { RsaService } from 'src/app/services/rsa.service';
import * as claveRSA from 'src/app/rsa'
import {User} from 'src/app/model/user'
import { __values } from 'tslib';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private rsaService: RsaService, private _router: Router){

  }

  Username:string ='';
  userpassword:string ='';
  privateKey:bigint=0n;
  mensaje:bigint=0n;
  error:number=-1;
  // classes: Array<user.User> =[]
  

  ngOnInit(): void {
  
  }

  async Registrar(){
   // const json ='{"username": "'+this.Username+'","password": "'+this.userpassword+'"}';
   let user34 = new User(this.Username,this.userpassword,1234,9)

   
    this.rsaService.newUser(user34).subscribe(

      async data=>{
       
       this.error=0;
        
      }
    )
  }

  async IniciarSesion(){

    this.rsaService.login(this.Username,this.userpassword).subscribe(
      async data=>{
        localStorage.setItem('username',this.Username);
        this._router.navigate(['/rsa'])
      },
      async error=>{
        this.error=1;
      }
    )
  }

  async Reseterror(){
    this.error=-1;
  }

 

}
