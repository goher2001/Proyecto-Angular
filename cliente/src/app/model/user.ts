export class User {
    name: string
    password: string
    pubKeyE: bigint
    privKeyD:bigint
    
    n:bigint

    constructor( name: string,password: string, pubKeyE: bigint, n:bigint, privKeyD:bigint){

        this.name=name;
        this.password=password;
        this.pubKeyE=pubKeyE;
        this.n = n;
        this.privKeyD=privKeyD;

    }
}

