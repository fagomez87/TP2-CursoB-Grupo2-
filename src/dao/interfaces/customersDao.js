import Error from '../../services/error.js'
import Joi from '@hapi/joi'

class CustomersDao {

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

    async getById(id) {
        throw Error(500, 'getById not implemented')
    }

    async create(customerJson) {
        this.validate(customerJson)
        return await this.doCreate(customerJson)
    }

    async doCreate(customer) {
        throw Error(500, 'add not implemented')
    }

    async deleteById(id) {
        throw Error(500, 'deleteById not implemented')
    }

    async deleteAll() {
        throw Error(500, 'deleteAll not implemented')
    }

    validate(customerJson) {
        const schema = Joi.object({
            cuil: Joi.string().required(),
            name: Joi.string().required(),
            surname: Joi.string().required(),
            latitud: Joi.number().required(),
            longitud: Joi.number().required(),
            mail: Joi.string().required(),
            veraz: Joi.boolean().required(),
        });
        const { error } = schema.validate(customerJson)
        if (error) {
            throw error
        }    
    }
}

export default CustomersDao