import CUFacturacion from '../../src/facturacion/cuFacturacion.js'
import DaoFactory from '../dao/daoFactory.js'
import CommercesLocalizer from '../geolocalizacion/cuGeolocalizacion.js'
import libGeo from '../geolocalizacion/libGeoloc.js'

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
 * Método que genera una factura a partir de un cuil y la envía por mail. 
 * @param {*} cuil 
 */
async function generateInvoice (cuil) {
    const cuFacturacion = new CUFacturacion(DaoFactory.getInvoicesDao())
    return await cuFacturacion.run(cuil)
}

async function insertCustomer(customerJson) {
    const customersDao = DaoFactory.getCustomersDao()
    return await customersDao.create(customerJson)
}

async function insertCommerce(commerceJson) {
    // Obtiene el DAO con el factory (puede ser caché o db segun la config)
    const commercesDao = DaoFactory.getCommercesDao()
    // El create está implementado en la Super clase, dao/interfaces/commercesDao, ya que
    // realiza procesos comunes a todos los daos
    return await commercesDao.create(commerceJson)
}

async function insertInvoice(invoiceJson) {
    const invoicesDao = DaoFactory.getInvoicesDao()
    return await invoicesDao.create(invoiceJson)
}

export default { findCommercesNearCustomer, generateInvoice, insertCustomer, insertCommerce, insertInvoice }