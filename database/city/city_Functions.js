const model = require('./cityTable_Model')
const LocationNotFound = require('../../errors/location_NotFound')

module.exports = {
    //LISTS ALL CITIES
    list() {
        return model.findAll({ raw: true })
    },
    //INSERT CITY ON DATABASE
    insert(city) {
        return model.create(city)
    },

    //SEARCHES FOR SPECIFIED STATE ON DB
    async getState(state) {
        const located = await model.findOne({
            where: {
                state: state
            }
        })

        if (!located) {
            throw new LocationNotFound()
        }
        else {
            return model.findAll({
                where: {
                    state: state
                },
                raw: true
            })
        }
    },
    //SEARCHES FOR SPECIFIED CITY ON DB
    async getCity(name) {
        const located = await model.findOne({
            where: {
                name: name
            }
        })

        if (!located) {
            throw new LocationNotFound()
        }
        else {
            return model.findAll({
                where: {
                    name: name
                },
                raw: true
            })
        }
    },
}