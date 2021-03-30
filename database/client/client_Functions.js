const model = require('./clientTable_Model')
const ClientNotFound = require('../../errors/client_NotFound')
const Sequelize = require('sequelize')
const moment = require('moment')

module.exports ={
/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *      type: "object"
 *          required:
 *              - "name"
 *              - "gender"
 *              - "birthday"
 *              - "age"
 *              - "city"
 *          properties:
 *              id:
 *                  type: "integer"
 *                  format: "int64"
 *              name:
 *                  type: "string"
 *                  example: "Joan Fontaine"
 *              gender:
 *                  type: "string"
 *                  enum:
 *                      - "M"
 *                      - "F"
 *                      - "O"
 *                  example: "F"
 *              birthday:
 *                  type: "string"
 *                  example: "22/10/1917"
 *              age:
 *                  type: "integer"
 *                  example: "96"
 *              city:
 *                  type: "string"
 *                  format: "Tokyo"
 *              creationDate:
 *                  type: "string"
 *                  example: "01/01/2001T13:49:24.647Z"
 *              updateDate:
 *                  type: "string"
 *                  example: "01/01/2001T13:49:24.647Z"
 *              version:
 *                  type: "string"
 *                  example: "1.0"
 *              id:
 *                  type: "integer"
 *                  format: "int64"
 */

    /**
  * @swagger
  * tags:
  *   name: Client
  *   description: Client space
  */

    /**
     * @swagger
     * /clients:
     *   get:
     *     summary: Returns the list of all the books
     *     tags: [Client]
     *          responses:
     *       "200":
     *         description: Operation successful!
     *         schema:
     *           type: array
     *           items:
     *             $ref: "#/components/Client"
     */
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