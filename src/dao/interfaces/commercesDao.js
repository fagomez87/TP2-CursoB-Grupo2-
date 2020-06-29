import Error from '../../services/error.js'
import Joi from '@hapi/joi'

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

    async create(commerceJson) {
        // proceso común a todas las implementaciones de este dao. Primero se valida la
        // entrada de datos usando JOI y luego se llama al doCreate(), que está implementado
        // en cada DAO (cache y db)
        this.validate(commerceJson)
        return await this.doCreate(commerceJson)
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

    // Replicamos la validación que realiza en última instancia la persistencia de mongoDB
    validate(commerceJson) {
        const schema = Joi.object({
            cuit: Joi.string().required(),
            name: Joi.string().required(),
            surname: Joi.string().required(),
            razonSocial: Joi.string().required(),
            type: Joi.string().required(),
            latitud: Joi.number().required(),
            longitud: Joi.number().required()
        });
        const { error } = schema.validate(commerceJson)
        if (error) {
            throw error
        }    
    }
}

export default CommercesDao