import DaoFactory from '../dao/daoFactory.js'
import CUFacturacion from '../src/facturacion/cuFacturacion.js'

const invoiceDao = DaoFactory.getInvoicesDao();

let daoObject = await invoiceDao.getByCuil("15285439875")

const casillaMail = {
    to: 'fernandogomez87@gmail.com',
}   


test = async () => {
    const cuFacturacion = new CUFacturacion(daoObject,casillaMail)
    const testCFacturacion = await cuFacturacion.run()

}