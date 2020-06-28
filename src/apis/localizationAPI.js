import Error from '../services/error.js'

class CommercesLocalizer {
  constructor (customersDao,commercesDao,libGeoloc) {
    
    if(customersDao === undefined) {
      throw Error(404,'Clientes inexistentes')
    }
    if(commercesDao === undefined) {
      throw Error(404,'Comercios inexistentes')
    }
    if(libGeoloc === undefined) {
      throw Error(404,'Comercios inexistentes')
    }
    this.libGeoloc = libGeoloc
    this.customersDao = customersDao
    this.commercesDao = commercesDao
  }

  async run(cuil, maxDistance) {
    validateCuil(cuil)
    validateDistance(maxDistance)
    try {
      const customer = await this.customersDao.getByCuil(cuil)
  
      validateCustomer(customer)
  
      const commerces = await this.commercesDao.getAll()
  
      validateCommerces(commerces)
  
      const coords = {
        latitud: customer.latitud,
        longitud: customer.longitud
      }
  
      const commercesNearCustomer = this.libGeoloc.filterByDistance(commerces, maxDistance, coords)
      return commercesNearCustomer
    } catch (err) {
        throw Error(err.status, err.message || 'Origen de datos desconocido')
    }
  }
}


function validateCuil(cuil) {
  if ( !cuil || cuil === '' ) throw Error(400, 'cuil inválido')
}

function validateDistance(distance) {
  if ( !distance || distance <= 0 ) throw Error(400, 'distancia inválida')
}

function validateCustomer(customer) {
  if ( !customer ) throw Error(404, 'cliente inexistente')
  if ( customer.veraz ) throw Error(410, `El cliente ${customer.name} ${customer.surname} es sospechoso`)
}

function validateCommerces(commerces) {
  if ( !commerces || commerces.length <= 0 ) throw Error(413, 'Listado de comercios inválido')
}


export default CommercesLocalizer 