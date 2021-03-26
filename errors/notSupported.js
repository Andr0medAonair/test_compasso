class NotSupported extends Error {
    constructor(contentType) {
        super(`Warning: content ${contentType} not supported!`)
        this.name = 'ContentNotSupported'
        this.idError = 3
    }
}

module.exports = NotSupported