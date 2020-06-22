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
        const { router } = this
        router.route('/geolocalizacion/comercioscercanos').post(async (req, res) => {
            const data = req.body
            const nearCommerces = await RequestManager.findCommercesNearCustomer(data.cuil, data.maxDistance)
            res.json(nearCommerces)
        })

        // ACÁ HABRIA QUE REPLICAR LO DE ARRIBA CON EL CU DE FACTURACIÓN....
        router.route('/facturacion/generarfactura').post(async (req, res) => {
            console.log(req.body)
            
        })    
































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
        })
    }

    getRouter() {
        return this.router
    }

    static getInstance() {
        return new Router().getRouter()
    }
}