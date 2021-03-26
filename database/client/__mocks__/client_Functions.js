module.exports = {
    //LIST CLIENTS
    list() {
        return []
    },

    //INSERT CLIENTS
    insert(client) {
        return {
            id: 100,
            creationDate: "23/03/2021",
            updateDate: "23/03/2021",
            version: 0
        }
    },

    //SEARCH CLIENTS' ID FOR REQUESTED ONE
    async getID(id) {
        return {
            id: 100,
            creationDate: "23/03/2021",
            updateDate: "23/03/2021",
            version: 0
        }
    },
    //SEARCH CLIENTS' NAME FOR REQUESTED ONE
    async getName(name) {
        return {
            id: 100,
            creationDate: "23/03/2021",
            updateDate: "23/03/2021",
            version: 0
        }
    },

    //UPDATE REQUESTED CLIENT'S DATA
    update(id, updateDate) {
    },
    //DELETE REQUESTED CLIENT'S DATA
    remove(id) {
    }
}