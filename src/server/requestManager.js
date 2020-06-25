import LocalizationApi from '../apis/localizationAPI.js'
import CUFacturacion from '../../src/facturacion/cuFacturacion.js'
import DaoFactory from '../dao/daoFactory.js'

const invoiceDao = DaoFactory.getInvoicesDao();

async function findCommercesNearCustomer(cuil, maxDistance) {
    return await LocalizationApi.findCommercesNearCustomer(cuil, maxDistance)
}

async function generateInvoice (cuil) {
    const daoObject = await invoiceDao.getByCuil(cuil)
    const cuFacturacion = new CUFacturacion(daoObject)
    await cuFacturacion.run()
}

export default { findCommercesNearCustomer, generateInvoice }