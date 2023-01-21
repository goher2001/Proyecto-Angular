export class peticion{

    id:number;
    Vendedor: string;
    Comprador:string;
    identrada: number;

    constructor(id:number, Vendedor: string, Comprador:string, identrada: number){
        this.id=id;
        this.Comprador=Comprador;
        this.Vendedor=Vendedor;
        this.identrada=identrada;

    }
}