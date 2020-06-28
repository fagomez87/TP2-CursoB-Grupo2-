import CUFacturacion from '../../src/facturacion/cuFacturacion.js'
import DaoFactory from '../dao/daoFactory.js'
import CommercesLocalizer from '../apis/localizationAPI.js'
import libGeo from '../services/libGeoloc.js'



/**
 * Método que retorna un listado con los comercios filtrados por la distancia
 * @param {*} cuil 
 * @param {*} maxDistance 
 */
async function findCommercesNearCustomer(cuil, maxDistance) {
    const commercesLocalizer = new CommercesLocalizer(DaoFactory.getCustomersDao(),DaoFactory.getCommercesDao(),libGeo)
    return await commercesLocalizer.run(cuil, maxDistance)
}

/**
 * 
 * @param {*} cuil 
 */
async function generateInvoice (cuil) {
    const cuFacturacion = new CUFacturacion(DaoFactory.getInvoicesDao())
    await cuFacturacion.run(cuil)
}

export default { findCommercesNearCustomer, generateInvoice }