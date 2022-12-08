import { Component } from '@angular/core';
import { RsaService } from 'src/app/services/rsa.service';
import * as claveRSA from 'src/app/rsa'
import * as user from 'src/app/model/user'
import { __values } from 'tslib';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private pruebaService: RsaService, private _router: Router){

  }

  Username:string ='';
  userpassword:string ='';
  privateKey:bigint=0n;
  mensaje:bigint=0n;
  error:number=-1;
   classes: Array<user.User> =[]
  

  ngOnInit(): void {
    let user1: user.User = {
      name: "Christian",
      password: '1234',
      pubKeyE: 147109628126100023593239446490899395001078431760853540398962704792489738934991397248021316777065115915633380757011226090175671693614646227957074381068067568099358213740198667523758748645509515291106503899283478504350755335804498133153167529339067898543596931834333269810934666919976567062886159234861679651851n,
      n: 2342n,
      privKeyD:242n
    };
   
    this.classes = [user1];
  }

  async Registrar(){
    const json ='{"username": "'+this.Username+'","password": "'+this.userpassword+'"}';
    this.pruebaService.Registrar(JSON.parse(json)).subscribe(

      async data=>{
        var newuser: user.User = new user.User(this.Username,this.userpassword,data.pubE,data.privN,data.privD)
        this.classes.push(newuser);
       
        
      }
    )
  }

  async IniciarSesion(){

    var found = this.classes.find(value => (value.name === this.Username)&&(value.password===this.userpassword))
    if(found){
     localStorage.setItem('userLoggeado',this.Username)

     this._router.navigate(['/rsa']);
    }
    else{
      this.error=1;
    }
  }

  async Reseterror(){
    this.error=-1;
  }

 

}
