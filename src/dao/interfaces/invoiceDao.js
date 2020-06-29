import Error from '../../services/error.js' 

class InvoiceDao {

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
        throw Error(500, 'getByCuil not implemented')
    }

    async getByRazonSocial(name) {
        throw Error(500, 'getByName not implemented')
    }

    async getByCuit(surname) {
        throw Error(500, 'getBySurname not implemented')
    }

    async getById(id) {
        throw Error(500, 'getById not implemented')
    }

    async create(invoice) {
        throw Error(500, 'add not implemented')
    }

    async deleteById(id) {
        throw Error(500, 'deleteById not implemented')
    }

    async deleteAll() {
        throw Error(500, 'deleteAll not implemented')
    }
}

export default InvoiceDao