import { Component } from '@angular/core';
import { RsaService } from 'src/app/services/rsa.service';
import * as claveRSA from 'src/app/rsa'
import * as user from 'src/app/model/user'
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private pruebaService: RsaService){

  }

  Username:string ='';
  userpassword:string ='';
  privateKey:bigint=0n;
  mensaje:bigint=0n;
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
        console.log(this.classes)
        
      }
    )
  }

  async IniciarSesion(){

    var found = this.classes.find(value => (value.name === this.Username)&&(value.password===this.userpassword))
    if(found){
      console.log("bien")
    }
    else{
      console.log('mal')
    }
  }

  async Firmar(){
    
    var found = this.classes.find(value=>(value.name === 'jaskie'))
   // if(found){
      console.log('hols')
      let privada: claveRSA.RsaPrivateKey = new  claveRSA.RsaPrivateKey(this.privateKey,179594136643155679113162790150632306207235392284218462592197681766549555344457458652339139580350769900680575559082556317850630407510138639768279602686282320375294868038048143428864756116717586319849244422467220085662067639465680690200899115829038312033310126898261753276541121228030800306368072902199867842091n)
      privada.sign(this.mensaje);
      this.pruebaService.Firmar(privada.sign(this.mensaje),'jaskie').subscribe();
   // }

    
  }

}
