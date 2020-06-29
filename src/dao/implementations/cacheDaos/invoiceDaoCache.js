import InvoiceDao from '../../interfaces/invoiceDao.js'
import { InvoiceCache } from '../../../cache/invoice.js'

class InvoiceDaoCache extends InvoiceDao {
    constructor () {
      super()
      this.invoices = InvoiceCache
    }

    async getAll() {
      return this.invoices
    }

    async getByName(name) {
      return this.invoices.filter(c => c.name.includes(name))
    }

    async getByCuil(cuil) {
      return this.invoices.filter(c => c.cuil === cuil)[0]
    }

    async getByRazonSocial(razonSocial) {
        return this.invoices.filter(c => c.razonSocial.includes(razonSocial))
      }
  
      async getByCuit(cuit) {
        return this.invoices.filter(c => c.cuit === cuit)[0]
      }

    async getById(id) {
      return this.invoices.filter(c => c._id === id)
    }
    async doCreate(invoiceJson) {
      const length = this.invoices.push(invoiceJson)
      return this.invoices[length - 1]
    }
}

export default InvoiceDaoCache