import CommercesDao from '../../interfaces/commercesDao.js'
import { commercesCache } from '../../../cache/commerces.js'


class CommercesDaoCache extends CommercesDao {
    constructor () {
      super()
      this.commerces = commercesCache
    }

    async getAll() {
      return this.commerces
    }

    async getByName(name) {
      return this.commerces.filter(c => c.name.includes(name))
    }

    async getByCuit(cuit) {
      return this.commerces.filter(c => c.cuit === cuit)[0]
    }

    async getById(id) {
      return this.commerces.filter(c => c._id === id)
    }

    async doCreate(commerceJson) {
      // el método push devuelve el length actualizado.
      // insertamos el nuevo commerce y lo devolvemos
      const length = this.commerces.push(commerceJson)
      return this.commerces[length - 1]
    }
}

export default CommercesDaoCache