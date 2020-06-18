import Error from '../services/error.js'
import DaoFactory from '../dao/daoFactory.js'
import Localizer from '../services/libGeoloc.js'

const commercesDao = DaoFactory.getCommercesDao()
const customersDao = DaoFactory.getCustomersDao()

async function findCommercesNearCustomer(cuil, maxDistance) {
  try {
    // POR ACÁ PASÓ MÓNICA
    validateCuil(cuil)
    validateDistance(maxDistance)

    const customer = await customersDao.getByCuil(cuil)

    validateCustomer(customer)

    const commerces = await commercesDao.getAll()

    validateCommerces(commerces)

    const coords = {
      latitud: customer.latitud,
      longitud: customer.longitud
    }

    const commercesNearCustomer = Localizer.filterByDistance(commerces, maxDistance, coords)
    return commercesNearCustomer
  } catch (err) {
    console.log('Error buscando comercios cercanos:', err.message)
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

// TEST
findCommercesNearCustomer('15285439875', 3).then((result) => console.log(result))
