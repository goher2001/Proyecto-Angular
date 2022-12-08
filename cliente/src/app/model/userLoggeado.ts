export class userLoggeado{

    nombre: string
    password: string

    constructor(nombre: string,password: string){

        this.nombre=nombre;
        this.password=password;
    }

    getUser(){
        return userLoggeado;
    }

}
