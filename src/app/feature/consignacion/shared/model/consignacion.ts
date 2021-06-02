export class Consignacion{
    id:number;
    nombre:string;
    apellido:string;
    direccion:string;
    identificacion:string;
    telefono:string
    cantidadConsignada:number;

    constructor(id:number,nombre:string,apellido:string,
        direccion:string,identificacion:string,telefono:string,
        cantidadConsignada:number ){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.cantidadConsignada = cantidadConsignada;
    }

}