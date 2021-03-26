module.exports = {
    //LISTS ALL CITIES
    list() {
        return []
    },
    //INSERT CITY ON DATABASE
    insert(city) {
        return {
            id: 100,
            creationDate: "23/03/2021",
            updateDate: "23/03/2021",
            version: 0
        }
    },

    //SEARCHES FOR SPECIFIED STATE ON DB
    async getState(state) {
        return {
            id: 100,
            creationDate: "23/03/2021",
            updateDate: "23/03/2021",
            version: 0
        }
    },
    //SEARCHES FOR SPECIFIED CITY ON DB
    async getCity(name) {
        return {
            id: 100,
            creationDate: "23/03/2021",
            updateDate: "23/03/2021",
            version: 0
        }
    }
}