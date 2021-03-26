const routerCity = require('express').Router();
const City = require('../database/city/city_Class');
const city_Functions = require('../database/city/city_Functions');

//GET ALL CITIES
routerCity.get('/', async (req, res) => {
    const results = await city_Functions.list()
    res.status(200)
    res.send(
        JSON.stringify(results)
    )
})

//GET CITY BY NAME
routerCity.get('/city/:nameCity', async (req, res, aux) => {
    try {
        const city = req.params.nameCity
        const name = new City({ city: city })
        const results = await city_Functions.getCity(city)
        res.status(200)
        res.send(
            JSON.stringify(results)
        )
    }
    catch (error) {
        aux(error)
    }
})

//GET STATE BY NAME
routerCity.get('/state/:nameState', async (req, res, aux) => {
    try {
        const state = req.params.nameState
        const city = new City({ state: state })
        const results = await city_Functions.getState(state)
        res.status(200)
        res.send(
            JSON.stringify(results)
        )
    }
    catch (error) {
        aux(error)
    }
})
//POST CITY AND STATE
routerCity.post('/', async (req, res, aux) => {
    try {
        const received_Data = req.body
        const city = new City(received_Data)
        await city.create()
        res.status(201)
        res.send(
            JSON.stringify(city)
        )
    }
    catch (error) {
        aux(error)
    }
})

module.exports = routerCity