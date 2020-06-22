import Server from './app.js'

const app = new Server()
const port = process.env.PORT || 8085
app.start(port)

