import express from 'express'
import Router from './router.js'

export default class App {

    constructor() {
        // me guardo express
        const app = express()
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
        this.app.listen(port, () => {
            console.log(`- - - Server ready. Listening on port ${port} - - -`)
        })
    }
} 