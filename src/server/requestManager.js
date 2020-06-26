import CUFacturacion from '../../src/facturacion/cuFacturacion.js'
import DaoFactory from '../dao/daoFactory.js'
import CommercesLocalizer from '../apis/localizationAPI.js'
import libGeo from '../services/libGeoloc.js'

const invoiceDao = DaoFactory.getInvoicesDao();

/**
 * 
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
    const daoObject = await invoiceDao.getByCuil(cuil)
    const cuFacturacion = new CUFacturacion(daoObject)
    await cuFacturacion.run()
}

export default { findCommercesNearCustomer, generateInvoice }