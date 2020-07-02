import express from 'express'
import Router from './router.js'
import mongoose from 'mongoose'
import config from '../../config.js'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'


export default class App {

    constructor() {
        const swaggerDoc = fs.readFileSync('./Tp2SwaggerDocs.yml')
        // me guardo express
        const app = express()
       // app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.json())
        const router = Router.getInstance()
        // middleware: configuro todo lo que necesito que tenga el servidor

        // todas las rutas van a ir al router
        app.use('/api', router)
        // express reconoce el formato json

        // configura la ruta para que levante la docu
        app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDoc))

        // me guardo en la instancia de App el servidor
        this.app = app
    }

    start(port) {
        // conectarse a la base de datos según el modo configurado (db o caché)
        initDataBase[config.mode]()   
        this.app.listen(port, () => {
            console.log(`- - - Server ready. Listening on port ${port} - - -`)
        })
    }
}

// Esto puede calificar como un patrón strategy. Es un objeto con dos atributos/funciones, cuyo nombre coincide con el modo de la config, entonces se alterna el comportamiento sin utilizar if. 
const initDataBase = {
    db: () => {
        const uri = process.env.ATLAS_URI
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        mongoose.Model.on('index', function(err) {
            if(err) console.log(err)
            else console.log('* * * Connected to Mongo DB * * *')
        })
    },
    cache: () => {
        console.log('Connected to cache DB')
    }
}