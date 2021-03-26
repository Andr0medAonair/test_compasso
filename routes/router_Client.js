const routerClient = require('express').Router();
const client_Functions = require('../database/client/client_Functions');
const Client = require('../database/client/client_Class');

routerClient.get('/', async (req, res) => {
    const results = await client_Functions
.list()
    res.status(200)
    res.send(
        JSON.stringify(results)
    )
})

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