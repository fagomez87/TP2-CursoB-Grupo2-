import Error from '../../services/error.js'

class CommercesDao {

    async getAll() {
        throw Error(500, 'getAll not implemented')
    }

    async getByName(name) {
        throw Error(500, 'getByName not implemented')
    }

    async getByCuit(cuit) {
        throw Error(500, 'getByCuit not implemented')
    }

    async getById(id) {
        throw Error(500, 'getById not implemented')
    }

    async add(commerce) {
        throw Error(500, 'add not implemented')
    }

    async deleteById(id) {
        throw Error(500, 'deleteById not implemented')
    }

    async deleteAll() {
        throw Error(500, 'deleteAll not implemented')
    }
}

export default CommercesDao