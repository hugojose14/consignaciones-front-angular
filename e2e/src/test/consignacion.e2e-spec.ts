import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import {ConsignacionPage} from '../page/consignacion/consignacion.po'

describe('workspace-project Consignacion',()=>{

    let page: AppPage;
    let navBar: NavbarPage;
    let consignacion: ConsignacionPage

    beforeEach(()=>{
        page = new  AppPage();
        navBar = new NavbarPage();
        consignacion = new ConsignacionPage ();
    })

    it('debería crear consignacion',()=>{

        const NOMBRE_CONSIGNACION = 'Hugo';        
        const APELLIDO_CONSIGNACION = 'Pérez';
        const DIRECCION_CONSIGNACION = 'Barrio españa';        
        const TELEFONO_CONSIGNACION = '3054705392';
        const IDENTIFICACION_CONSIGNACION = '12912012';        
        const CANTIDAD_CONSIGNADA = 20000;

        page.navigateTo();
        navBar.clickBotonConsignacion();
        consignacion.clickBotonCrearConsignacion();
        consignacion.ingresarNombre(NOMBRE_CONSIGNACION);
        consignacion.ingresarDireccion(DIRECCION_CONSIGNACION);
        consignacion.ingresarApellido(APELLIDO_CONSIGNACION);
        consignacion.ingresarIdentificacion(IDENTIFICACION_CONSIGNACION);
        consignacion.ingresarTelefono(TELEFONO_CONSIGNACION);
        consignacion.ingresarCantidadConsignada(CANTIDAD_CONSIGNADA);
        consignacion.botonFuncionalidadAnadirConsignacion();
        expect(consignacion.botonGuardarActivo()).toBe(true);
        expect(consignacion.valorBotonGuardar()).toBe("Registrar Consignación");

    })

    it('debería listar las consignaciones',()=>{
        page.navigateTo();
        navBar.clickBotonConsignacion();
        consignacion.clickListarConsignacion();
        expect(consignacion.contarConsignaciones()).not.toBeNull();
    })

    it('debería actualizar consignación',()=>{
        const NOMBRE_CONSIGNACION = 'Hugo José'
        page.navigateTo();
        navBar.clickBotonConsignacion();
        consignacion.clickListarConsignacion();
        consignacion.clickBotonIrVistActualizar();
        consignacion.ingresarNombre(NOMBRE_CONSIGNACION);
        consignacion.botonFuncionalidadActualizarConsignacion();
        expect(consignacion.botonActualizarActivo()).toBe(false);
        expect(consignacion.valorBotonActualizar()).toBe('Actualizar consignación');
    })


})
