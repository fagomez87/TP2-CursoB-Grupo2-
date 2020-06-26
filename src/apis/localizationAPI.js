import Error from '../services/error.js'

class CommercesLocalizer {
  constructor (customersDao,commercesDao,libGeoloc) {
    
    if(customersDao === undefined) {
      throw Error('Clientes inexistentes')
    }
    if(commercesDao === undefined) {
      throw Error('Comercios inexistentes')
    }
    if(libGeoloc === undefined) {
      throw Error('Comercios inexistentes')
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
        throw Error('Ocurrió un error ' + err.message)
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
  if ( !customer ) throw Error(400, 'cliente inexistente')
  if ( customer.veraz ) throw Error(400, `El cliente ${customer.name} ${customer.surname} es sospechoso`)
}

function validateCommerces(commerces) {
  if ( !commerces || commerces.length <= 0 ) throw Error(500, 'listado de comercios inválido')
}


export default CommercesLocalizer 