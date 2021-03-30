const model = require('./clientTable_Model')
const ClientNotFound = require('../../errors/client_NotFound')
const Sequelize = require('sequelize')

module.exports ={
//LIST CLIENTS
    list(){
        return model.findAll({ raw: true })
    },

//INSERT CLIENTS
    insert (client){
        return model.create(client)
    },
//SEARCH CLIENTS' ID FOR REQUESTED ONE
    async getID (id){
        const located = await model.findOne({
            where: {
                id: id
            }
        })

        if (!located) {
            throw new ClientNotFound()
        }

        return located
    },
//SEARCH CLIENTS' NAME FOR REQUESTED ONE
    async getName(name){
        const located = await model.findOne({
            where: {
                name: name
            }
        })

        if (!located){
            throw new ClientNotFound()
        }
        else{
            return model.findAll({
                where: {
                    name: name,
                },
                raw: true
            })
        }
    },

//UPDATE REQUESTED CLIENT'S DATA
    update(id, updateDate){
        return model.update(
            updateDate,
            {
                where:{id:id}
            }
        )
    },
//DELETE REQUESTED CLIENT'S DATA
    /**
     * @swagger
     * /{id}:
     *   delete:
     *     summary: Remove the client by id
     *     tags: [Client]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *              type: "integer"
     *              format: "int64"
     *         required: true
     *         description: The book id
     *     responses:
     *       200:
     *         description: Removed client {id} successfully!
     *       404:
     *         description: Client not found!
     */

    remove(id){
        return model.destroy({
            where:{id:id},
        })
    }
}