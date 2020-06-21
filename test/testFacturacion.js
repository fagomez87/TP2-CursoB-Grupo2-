import DaoFactory from '../src/dao/daoFactory.js' 
import CUFacturacion from '../src/facturacion/cuFacturacion.js'


const invoiceDao = DaoFactory.getInvoicesDao();

const casillaMail ='fernandogomez87@gmail.com', 

testConPago = async () => {
    try{
    let daoObject = await invoiceDao.getByCuil("15285439875")
    const cuFacturacion = new CUFacturacion(daoObject,casillaMail)
    await cuFacturacion.run()
    }catch(error){
        console.log(error)
    }
}



const casillaMail2 ='nadiaalebri@gmail.com', 

testSinPago = async () => {
    try{
    let daoObject = await invoiceDao.getByCuil("20336758100")
    const cuFacturacion = new CUFacturacion(daoObject,casillaMail2)
    await cuFacturacion.run()
    }catch(error){
        console.log(error)
    }
}

testConPago()
testSinPago()