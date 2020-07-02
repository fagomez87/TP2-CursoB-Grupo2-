import express from 'express'
import path from 'path';
import RequestManager from './requestManager.js'

const __dirname = path.resolve();

export default class Router {
    constructor () {
        this.router = express.Router()
        this.configure()
    }

    configure() {
        const { router }  = this

        router.route('/comercios').get(async (req, res) => {
            try {
                const cuil = req.query.cuil
                const maxDistance = req.query.maxDistance

                const nearCommerces = await RequestManager.findCommercesNearCustomer(cuil, maxDistance)
                res.json(nearCommerces)
            } catch (err) {
                res.status(err.status || 500).send('Error buscando comercios cercanos: ' + err.message) 
            }
        })
                
        router.route('/facturas').post(async (req, res) => {
            try {
                const cuil = req.body.cuil
                const filePath = await RequestManager.generateInvoice(cuil)
                res.status(200).download(filePath, 'Factura')
                // res.send('Se envío la factura por mail al comprador')
            } catch (err) {
                res.status(err.status || 500).send(err.message)
            }
        })

        // ALTA DE DATOS
        router.route('/comercios').post(async (req, res) => {
            try {
                const commerce = req.body
                // Llamamos a la fachada, que se comunica con los DAO
                const persistedCommerce = await RequestManager.insertCommerce(commerce)
                res.json(persistedCommerce)
            } catch (err) {
                res.status(err.status || 500).send(err.message)
            }
        })
        router.route('/clientes').post(async (req, res) => {
            try {
                const customer = req.body
                const persistedCustomer = await RequestManager.insertCustomer(customer)
                res.json(persistedCustomer)
            } catch (err) {
                res.status(err.status || 500).send(err.message)
            }
        })
        router.route('/ventas').post(async (req, res) => {
            try {
                const invoice = req.body
                const persistedInvoice = await RequestManager.insertInvoice(invoice)
                res.json(persistedInvoice)
            } catch (err) {
                res.status(err.status || 500).send(err.message)
            }
        })            
/* 
        router.route('/send').get(async (req, res) => {
            console.log('Requested send file')
            try {
                const filePath = __dirname + '/src/sample-files/samplePDF1.pdf'
                res.status(200).sendFile(filePath)
            } catch (error) {
                res.status(500).send('Error ' + error)
            }
        })

        router.route('/download').get(async (req, res) => {
            console.log('Requested download file')
            try {
                const filePath = __dirname + '/src/sample-files/samplePDF2.pdf'
                res.status(200).download(filePath)
            } catch (error) {
                res.status(500).send('Error ' + error)
            }
        }) */
    }

    getRouter() {
        return this.router
    }

    static getInstance() {
        return new Router().getRouter()
    }
}
