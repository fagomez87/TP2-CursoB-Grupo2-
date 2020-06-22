import DaoFactory from '../src/dao/daoFactory.js' 
import CUFacturacion from '../src/facturacion/cuFacturacion.js'

const invoiceDao = DaoFactory.getInvoicesDao();

async function test(cuil) {
    try {
        let daoObject = await invoiceDao.getByCuil(cuil)
        const casillaMail = daoObject.mail
        const cuFacturacion = new CUFacturacion(daoObject,casillaMail)
        await cuFacturacion.run()
    } catch(error){
        console.log(error)
    }
}

test('20336758100')