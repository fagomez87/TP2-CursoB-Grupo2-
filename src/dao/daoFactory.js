import CustomersDaoCache from './implementations/cacheDaos/customersDaoCache.js'
import CustomersDaoDB from './implementations/dbDaos/customersDaoDB.js'
import CommercesDaoCache from './implementations/cacheDaos/commercesDaoCache.js'
import CommercesDaoDB from './implementations/dbDaos/commercesDaoDB.js'
import InvoicesDaoDB from './implementations/dbDaos/invoicesDaoDB.js'
import InvoicesDaoCache from './implementations/cacheDaos/invoiceDaoCache.js'
import Config from '../../config.js'
import Error from '../services/error.js'

class DaoFactory {
    static getCustomersDao() {
        switch (Config.mode) {
            case 'db': return new CustomersDaoDB()
            case 'cache': return new CustomersDaoCache()
            default: throw Error (500, 'Invalid dao mode')
        }
    }
    static getCommercesDao() {
      switch (Config.mode) {
          case 'db': return new CommercesDaoDB()
          case 'cache': return new CommercesDaoCache()
          default: throw Error (500, 'Invalid dao mode')
        }
    }
    static getInvoicesDao() {
        switch (Config.mode) {
            case 'db': return new InvoicesDaoDB()
            case 'cache': return new InvoicesDaoCache()
            default: throw Error (500, 'Invalid dao mode')
        }
    }

}

export default DaoFactory
