'use strict'

class ClienteControlador {
    constructor(app) {
        app.get('/cliente', this.buscarTodos)
    }

    buscarTodos(req, res) {
        res.json([
            {
                name: "Paulo Arruda",
                email: "paulo@arruda.com.br",
                idade: 34
            },
            {
                name: "Ingrides Fernandes",
                email: "ingrides@fernandes.com.br",
                idade: 25
            }
        ])
    }
}

module.exports = ClienteControlador