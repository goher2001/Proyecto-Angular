export class User {
    name: string
    password: string
    pubKeyE: number
    //privKeyD:bigint
    
    n:number;

    constructor( name: string,password: string, pubKeyE: number, n:number )//), n:bigint, privKeyD:bigint){
{
        this.name=name;
        this.password=password;
        this.pubKeyE=pubKeyE;
        this.n = n;
        //this.privKeyD=privKeyD;

    }
}

