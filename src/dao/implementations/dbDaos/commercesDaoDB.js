import CommercesDao from '../../interfaces/commercesDao.js'
import Commerce from '../../../dbModels/commerce.js'

class CommercesDaoDB extends CommercesDao {
  constructor() {
    super()
  }
  async getAll() {
    return await Commerce.find()
  }
  async doCreate(commerceJson) {
    const commerce = new Commerce()
  
    const { cuit, name, surname, razonSocial, type, latitud, longitud } = commerceJson
    commerce.cuit = cuit
    commerce.name = name
    commerce.surname = surname
    commerce.razonSocial = razonSocial
    commerce.type = type
    commerce.latitud = latitud
    commerce.longitud = longitud
    
    await commerce.save()
    return commerce
  }
}



export default CommercesDaoDB