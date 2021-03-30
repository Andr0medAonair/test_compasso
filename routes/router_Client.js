const routerClient = require('express').Router();
const client_Functions = require('../database/client/client_Functions');
const Client = require('../database/client/client_Class');

/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *          type: "object"
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
     *  get:
     *      summary: Returns the list of all the clients
     *      tags: [Client]
     *      responses:
     *          "200":
     *              description: Operation successful!
     *              schema:
     *                  type: array
     *                  items:
     *                      $ref: "#/components/schemas/Client"
     */

routerClient.get('/', async (req, res) => {
    const results = await client_Functions
.list()
    res.status(200)
    res.send(
        JSON.stringify(results)
    )
})

    /**
     * @swagger
     * /clients:
     *  get:
     *      summary: Returns the list of all the clients
     *      tags: [Client]
     *      responses:
     *          "200":
     *              description: Operation successful!
     *              schema:
     *                  type: array
     *                  items:
     *                      $ref: "#/components/schemas/Client"
     */

routerClient.get('/id/:idClient', async (req, res, aux) => {
    try {
        const id = req.params.idClient
        const client = new Client({ id: id })
        await client.loadID(id)
        res.status(200)
        res.send(
            JSON.stringify(client)
        )
    }
    catch (error) {
        aux(error)
    }
})

routerClient.get('/name/:nameClient', async (req, res, aux) => {
    try {
        const name = req.params.nameClient
        const client = new Client({ name: name })
        const results = await client_Functions
    .getName(name)
        res.status(200)
        res.send(
            JSON.stringify(results)
        )
    }
    catch (error) {
        aux(error)
    }
})

routerClient.put('/:idClient', async (req, res, aux) => {
    try {
        const id = req.params.idClient
        const received_Data = req.body
        const data = Object.assign({}, received_Data, { id: id })
        const client = new Client(data)
        await client.update()
        res.status(200).send(`Updated client ${id} successfully!`)
    }
    catch (error) {
        res.send(
            aux(error)
        )
    }
})

routerClient.post('/', async (req, res, aux) => {
    try {
        const received_Data = req.body
        const client = new Client(received_Data)
        await client.create()
        res.status(201)
        res.send(
            JSON.stringify(client)
        )
    }
    catch (error) {
        aux(error)
    }
})

routerClient.delete('/:idClient', async (req, res, aux) => {
    try {
        const id = req.params.idClient
        const client = new Client({ id: id })
        await client.loadID()
        await client.remove()
        res.status(200).send(`Removed client ${id} successfully!`);
    }
    catch (error) {
        aux(error)
    }
})

module.exports = routerClient