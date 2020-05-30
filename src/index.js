// Este archivo es el encargado de arrancar todo el código del servidor
const express = require('express') // Este es solo el módulo, lo tengo que ejecutar
const engine = require('ejs-mate')// motor de plantillas

const path = require('path')

const socketIO = require('socket.io')

const http = require('http')

//inicializamos
const app = express() // objeto servidor

const server = http.createServer(app)

const io = socketIO(server) // Este io es el que me va a permitir conectarme con el cliente

// Settings configurar el servidor
app.engine('ejs', engine)// Nuevo motor de plantillas 
app.set('view engine','ejs')// Para usarlo

app.set('views',path.join(__dirname,'views'))

// Routes
app.use(require('./routes/'))

// Sockets
require('./socket')(io)

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// arrancamos el servidor
server.listen(5000, () => {
    console.log('Server on port 5000')
})