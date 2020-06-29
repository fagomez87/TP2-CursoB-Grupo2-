import InvoiceDao from '../../interfaces/invoiceDao.js'
import Invoice from '../../../dbModels/invoice.js'

class InvoicesDaoDB extends InvoiceDao {
  constructor() {
    super()
  }
  async create(invoiceJson) {
    const invoice = new Invoice()
  
    const { cuil, cuit, name, surname, mail, importe, razonSocial } = invoiceJson
    invoice.cuil = cuil
    invoice.cuit = cuit
    invoice.name = name
    invoice.surname = surname
    invoice.mail = mail
    invoice.importe = importe
    invoice.razonSocial = razonSocial
    
    await invoice.save()
    return invoice
  } 

  async getByCuil(cuil) {
    const invoice = await Invoice.findOne({ cuil: cuil })
    return {
      name: invoice.name,
      surname: invoice.surname,
      cuil: invoice.cuil,
      mail: invoice.mail,
      importe: invoice.importe,
      razonSocial: invoice.razonSocial,
      cuit: invoice.cuit
    }
  }
}

export default InvoicesDaoDB