import express from 'express'
import Router from './router.js'

export default class App {

    constructor() {
        const app = express()
        app.use(express.json())
        const router = Router.getInstance()
        // middleware
        app.use('/', router)
        this.app = app
    }

    start(port) {
        this.app.listen(port, () => {
            console.log(`- - - Server ready. Listening on port ${port} - - -`)
        })
    }
} 