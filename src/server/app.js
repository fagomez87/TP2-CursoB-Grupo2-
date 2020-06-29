import express from 'express'
import Router from './router.js'
import mongoose from 'mongoose'

export default class App {

    constructor() {
        // me guardo express
        const app = express()
       // app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.json())
        const router = Router.getInstance()
        // middleware: configuro todo lo que necesito que tenga el servidor

        // todas las rutas van a ir al router
        app.use('/api', router)
        // express reconoce el formato json
        

        // me guardo en la instancia de App el servidor
        this.app = app
    }

    start(port) {
        // conectarse a la base de datos
        const uri = process.env.ATLAS_URI
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        mongoose.Model.on('index', function(err) {
            if(err) console.log(err)
            else console.log('* * * Mongoose DB connected * * *')
        })
        this.app.listen(port, () => {
            console.log(`- - - Server ready. Listening on port ${port} - - -`)
        })
    }
} 