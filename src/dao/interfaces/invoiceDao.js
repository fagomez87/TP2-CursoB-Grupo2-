import Error from '../../services/error.js' 
import Joi from '@hapi/joi'

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

    async create(invoiceJson) {
        this.validate(invoiceJson)
        return await this.doCreate(invoiceJson)
    }

    async doCreate(commerce) {
        throw Error(500, 'add not implemented')
    }

    async deleteById(id) {
        throw Error(500, 'deleteById not implemented')
    }

    async deleteAll() {
        throw Error(500, 'deleteAll not implemented')
    }

    validate(invoiceJson) {
        const schema = Joi.object({
            cuil: Joi.string().required(),
            cuit: Joi.string().required(),
            name: Joi.string().required(),
            surname: Joi.string().required(),
            importe: Joi.number().required(),
            razonSocial: Joi.string().required(),
            mail: Joi.string().required(),

        });
        const { error } = schema.validate(invoiceJson)
        if (error) {
            throw error
        }    
    }
}

export default InvoiceDao