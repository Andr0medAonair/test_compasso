class DataNotInput extends Error {
    constructor() {
        super('Warning: Not enough data to update!')
        this.name = 'DataNotInput'
        this.idError = 2
    }
}

module.exports = DataNotInput