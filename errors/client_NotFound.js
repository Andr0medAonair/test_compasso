class ClientNotFound extends Error {
    constructor() {
        super('Warning: Client not found!')
        this.name = 'ClientNotFound'
        this.idError = 0
    }
}

module.exports = ClientNotFound