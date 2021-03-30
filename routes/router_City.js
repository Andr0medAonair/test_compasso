const routerCity = require('express').Router();
const City = require('../database/city/city_Class');
const city_Functions = require('../database/city/city_Functions');

/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *          type: "object"
 *          required:
 *              - "name"
 *              - "state"
 *          properties:
 *              id:
 *                  type: "integer"
 *                  format: "int64"
 *              name:
 *                  type: "string"
 *                  example: "Renton"
 *              state:
 *                  type: "string"
 *                  example: "Washington"
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
  *   name: City
  *   description: City space
  */

    /**
     * @swagger
     * /cities:
     *  get:
     *      summary: Returns the list of all cities
     *      tags: [City]
     *      responses:
     *          "200":
     *              description: Operation successful!
     *              schema:
     *                  type: array
     *                  items:
     *                      $ref: "#/components/schemas/City"
     */

//GET ALL CITIES
routerCity.get('/', async (req, res) => {
    const results = await city_Functions.list()
    res.status(200)
    res.send(
        JSON.stringify(results)
    )
})

    /**
     * @swagger
     * /cities/city/{nameCity}:
     *  get:
     *      summary: Returns the list of cities by name
     *      tags: [City]
     *      parameters:
     *          - in: path
     *            name: nameCity
     *            description: "City required"
     *            type: string
     *            required: true
     *      responses:
     *          "200":
     *              description: Operation successful!
     *              schema:
     *                  type: array
     *                  items:
     *                      $ref: "#/components/schemas/City"
     *          "404":
     *              description: Location not found!
    */

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

    /**
     * @swagger
     * /cities/city/{nameState}:
     *  get:
     *      summary: Returns the list of cities located on required state
     *      tags: [City]
     *      parameters:
     *          - in: path
     *            name: nameState
     *            description: "State required"
     *            type: string
     *            required: true
     *      responses:
     *          "200":
     *              description: Operation successful!
     *              schema:
     *                  type: array
     *                  items:
     *                      $ref: "#/components/schemas/City"
     *          "404":
     *              description: Location not found!
    */

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

    /**
     * @swagger
     * /cities:
     *  post:
     *      summary: Register a city
     *      tags: [City]
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      $ref: "#/components/schemas/City"
     *      responses:
     *          "201":
     *              description: Operation successful!
     *              schema:
     *                  type: array
     *                  items:
     *                      $ref: "#/components/schemas/City"
     *          "500":
     *              description: Internal server error!
     */

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