import CustommersDao from '../../interfaces/customersDao.js'
import Customer from '../../../dbModels/customer.js'

class CustomersDaoDB extends CustommersDao {
  constructor() {
    super()
  }
  
  async getAll() {
    throw Error(500, 'getAll not implemented')
  }

  async getByName(name) {
      throw Error(500, 'getByName not implemented')
  }

  async getBySurname(surname) {
      throw Error(500, 'getBySurname not implemented')
  }

  async getByCuil(cuil) {
      return await Customer.findOne({ cuil: cuil })
  }

  async getById(id) {
      return await Customer.findById(id)
  }

  async create(customerJson) {
    const customer = new Customer()
  
    const { cuil, name, surname, mail, veraz, latitud, longitud } = customerJson
    customer.cuil = cuil
    customer.name = name
    customer.surname = surname
    customer.mail = mail
    customer.veraz = veraz
    customer.latitud = latitud
    customer.longitud = longitud
    
    await customer.save()
    return customer
  }

  async deleteById(id) {
      throw Error(500, 'deleteById not implemented')
  }

  async deleteAll() {
      throw Error(500, 'deleteAll not implemented')
  }
}

export default CustomersDaoDB