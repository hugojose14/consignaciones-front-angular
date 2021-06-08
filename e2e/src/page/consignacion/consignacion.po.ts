import { by, element } from 'protractor';

//Archivo generador de herramientas
export class ConsignacionPage{

    //Routes para las funcionalidades
    private linkCrearConsignacion = element(by.id('linkCrearConsignacion'));
    private linkListarConsignacion = element(by.id('linkListarConsignacion')); 
    private linkActualizarConsignacion = element(by.id('btn-actualizar-route'));

    //Formulario crear consignación
    private inputNombreConsignacion = element(by.id('nombreConsignacion'));
    private inputApellidoConsignacion = element(by.id('apellidoConsignacion'));
    private inputDireccionConsignacion = element(by.id('direccionConsignacion'));
    private inputIdentificacionConsignacion = element(by.id('identificacionConsignacion'));
    private inputTelefonoConsignacion = element(by.id('telefonoConsignacion'));
    private inputCantidadConsignada = element(by.id('cantidadConsignacion'));

    //Botón añadir consignación
    private botonAnadirConsignacion = element(by.id('btn-guardar'));

    //Botón añadir actualización 
    private botonActualizarConsignacion = element(by.id('btn-actualizar'));

    //Listar todas las consignaciones
    private listaConsignaciones = element.all(by.css('mat-table mat-cell'));


    async clickBotonCrearConsignacion(){
        await this.linkCrearConsignacion.click();
    }

    async clickListarConsignacion(){
        await this.linkListarConsignacion.click();
    }

    async clickBotonIrVistActualizar(){
        await this.linkActualizarConsignacion.click();
    }

    async botonFuncionalidadActualizarConsignacion(){
        await this.botonActualizarConsignacion.click();
    }

    async botonFuncionalidadAnadirConsignacion(){
       await this.botonAnadirConsignacion.click();
    }

    async ingresarNombre(nombreConsignacion:string){
        await this.inputNombreConsignacion.sendKeys(nombreConsignacion);
    }

    async ingresarApellido(apellidoConsignacion:string){
        await this.inputApellidoConsignacion.sendKeys(apellidoConsignacion);
    }

    async ingresarDireccion(direccionConsignacion:string){
        await this.inputDireccionConsignacion.sendKeys(direccionConsignacion);
    }

    async ingresarIdentificacion(identificacionConsignacion:string){
        await this.inputIdentificacionConsignacion.sendKeys(identificacionConsignacion);
    }

    async ingresarTelefono(telefonoConsignacion:string){
        await this.inputTelefonoConsignacion.sendKeys(telefonoConsignacion);
    }

    async ingresarCantidadConsignada(cantidadConsignada:number){
        await this.inputCantidadConsignada.sendKeys(cantidadConsignada);
    }

    async botonGuardarActivo(){
        return await this.botonAnadirConsignacion.isPresent();
    }

    async valorBotonGuardar(){
        return await this.botonAnadirConsignacion.getText();
    }

    async contarConsignaciones(){
        return await this.listaConsignaciones.count();
    }

    async botonActualizarActivo(){
        return await this.botonActualizarConsignacion.isPresent();
    }

    async valorBotonActualizar(){
        return await this.botonActualizarConsignacion.getText();
    }

}