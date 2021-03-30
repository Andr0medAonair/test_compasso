const client_Functions = require('./client_Functions')
const moment = require('moment')
const DataNotInput = require('../../errors/data_NotInput')
const InvalidField = require('../../errors/invalidField')

class Client {
    constructor({ id, name, gender, birthday, age, city, creationDate, updateDate, version }) {
        this.id = id
        this.name = name
        this.gender = gender
        this.birthday = birthday
        this.age = age
        this.city = city
        this.creationDate = creationDate
        this.updateDate = updateDate
        this.version = version
    }
    //CREATES NEW CLIENT ON DB
    async create() {
        this.validate()
        const results = await client_Functions.insert({
            name: this.name,
            gender: this.gender,
            birthday: moment(this.birthday, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            age: this.age,
            city: this.city
        })
        this.id = results.id
        this.creationDate = results.creationDate
        this.updateDate = results.updateDate
        this.version = results.version
    }
    //LOAD CLIENT BY ID
    async loadID() {
        const found = await client_Functions.getID(this.id)
        this.name = found.name
        this.gender = found.gender
        this.birthday = moment(found.birthday, 'YYYY-MM-DD').format('DD/MM/YYYY')
        this.age = found.age
        this.city = found.city
        this.creationDate = found.creationDate
        this.updateDate = found.updateDate
        this.version = found.version
    }

    //UPDATE CLIENT
    async update() {
        await client_Functions.getID(this.id)
        const fields = ['name', 'gender', 'birthday', 'age', 'city']

        const dataUpdate = {}
        fields.forEach((field) => {
            const values = this[field]
            const date = Date.parse(values)
            if(typeof values === 'string' && values.length > 0){
                if(field === 'birthday')
                    dataUpdate[field] = moment(values, 'DD/MM/YYYY').format('YYYY-MM-DD')
                else
                    dataUpdate[field] = values
            }
            else
                dataUpdate[field] = values
        })

        if (Object.keys(dataUpdate).length === 0) {
            throw new DataNotInput()
        }

        await client_Functions.update(this.id, dataUpdate)

    }
    //REMOVES CLIENT FROM DB 
    remove() {
        return client_Functions.remove(this.id)
    }
    //FUNCTION TO CHECK IF DATA INPUT DATA IS VALID 
    validate() {
        const fields = ['name', 'gender', 'birthday', 'age', 'city']

        fields.forEach(field => {
            const value = this[field]

            if (typeof value !== 'string' && typeof value !== 'number' || value.length === 0 || value === null) {
                throw new InvalidField(field)
            }
        })

        return true
    }

}

module.exports = Client