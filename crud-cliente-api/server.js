const Express = require('express')
const ClienteControlador = require('./controlador/cliente-controlador')

class Server {
    constructor() {
        var app = new Express()

        this.ClienteControlador = new ClienteControlador(app)

        app.listen(3000)
    }
}

new Server()
