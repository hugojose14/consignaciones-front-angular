export class Consignacion{
    id:string;
    nombre:string;
    apellido:string;
    direccion:string;
    identificacion:string;
    telefono:string
    cantidadConsignada:number;

    constructor(id?:string, nombre?:string,apellido?:string,
        direccion?:string,identificacion?:string,telefono?:string,
        cantidadConsignada?:number ){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.cantidadConsignada = cantidadConsignada;
    }

    

}