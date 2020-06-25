import App from './app.js'

const app = new App()
const port = process.env.PORT || 8085
app.start(port)

