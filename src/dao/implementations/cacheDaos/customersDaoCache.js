import CustomersDao from '../../interfaces/customersDao.js'
import { customersCache } from '../../../cache/customers.js'

class CustomersDaoCache extends CustomersDao {
    constructor () {
      super()
      this.customers = customersCache
    }

    async getAll() {
      return this.customers
    }

    async getByName(name) {
      return this.customers.filter(c => c.name.includes(name))
    }

    async getByCuil(cuil) {
      return this.customers.filter(c => c.cuil === cuil)[0]
    }

    async getById(id) {
      return this.customers.filter(c => c._id === id)
    }
    
    async create (customer) {
      await this.customers.push(customer)
    }
}

export default CustomersDaoCache