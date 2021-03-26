class InvalidField extends Error {
    constructor(field) {
        const message = `Warning: field '${field}' is not valid!`
        super(message)
        this.name = 'InvalidField'
        this.idError = 4
    }
}

module.exports = InvalidField