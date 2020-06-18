import InvoiceDao from '../../interfaces/invoiceDao.js'
import { InvoiceCache } from '../../../cache/invoice.js'

class InvoiceDaoCache extends InvoiceDao {
    constructor () {
      super()
      this.invoice = InvoiceCache
    }

    async getAll() {
      return this.invoice
    }

    async getByName(name) {
      return this.invoice.filter(c => c.name.includes(name))
    }

    async getByCuil(cuil) {
      return this.invoice.filter(c => c.cuil === cuil)[0]
    }

    async getByRazonSocial(razonSocial) {
        return this.invoice.filter(c => c.razonSocial.includes(razonSocial))
      }
  
      async getByCuit(cuit) {
        return this.invoice.filter(c => c.cuit === cuit)[0]
      }

    async getById(id) {
      return this.invoice.filter(c => c._id === id)
    }
}

export default InvoiceDaoCache