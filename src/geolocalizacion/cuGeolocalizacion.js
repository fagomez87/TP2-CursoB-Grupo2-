import Error from '../services/error.js'

class CommercesLocalizer {
  constructor (customersDao,commercesDao,libGeoloc) {
    
    if(customersDao === undefined) {
      throw Error(404,'Repositorio de clientes inexistente',3002)
    }
    if(commercesDao === undefined) {
      throw Error(404,'Repositorio de comercios inexistente',3003)
    }
    if(libGeoloc === undefined) {
      throw Error(404,'Comercios inexistentes',3004)
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
        throw Error(err.status, err.message || 'Error desconocido',err.code)
    }
  }
}


function validateCuil(cuil) {
  if ( !cuil || cuil === '' ) throw Error(400, 'cuil inválido',3000)
}

function validateDistance(distance) {
  distance = Number(distance)
  if ( !distance || distance <= 0  || Number.isNaN(distance) ) throw Error(400, 'distancia inválida',3001)
}

function validateCustomer(customer) {
  if ( !customer ) throw Error(404, 'cliente inexistente', 3005)
  if ( customer.veraz ) throw Error(410, `El cliente ${customer.name} ${customer.surname} es sospechoso`)
}

function validateCommerces(commerces) {
  if ( !commerces || commerces.length <= 0 ) throw Error(413, 'Listado de comercios inválido')
}


export default CommercesLocalizer 