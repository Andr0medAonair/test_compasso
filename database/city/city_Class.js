const city_Functions = require("./city_Functions")
const InvalidField = require('../../errors/invalidField')

class City {
    constructor({ id, name, state, creationDate, updateDate, version }) {
        this.id = id
        this.name = name
        this.state = state
        this.creationDate = creationDate
        this.updateDate = updateDate
        this.version = version
    }

    async create() {
        this.validate()
        const results = await city_Functions.insert({
            name: this.name,
            state: this.state
        })
        this.id = results.id
        this.creationDate = results.creationDate
        this.updateDate = results.updateDate
        this.version = results.version
    }

    validate() {
        const fields = ['name', 'state']

        fields.forEach(field => {
            const value = this[field]

            if (typeof value !== 'string' || value.length === undefined || value === null) {
                throw new InvalidField(field)
            }
        })
        return true
    }
}

module.exports = City