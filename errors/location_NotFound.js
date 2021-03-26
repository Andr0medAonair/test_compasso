class LocationNotFound extends Error {
    constructor() {
        super('Warning: Location not found!')
        this.name = 'LocationNotFound'
        this.idError = 1
    }
}

module.exports = LocationNotFound