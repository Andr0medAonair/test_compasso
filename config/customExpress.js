const express = require('express')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    //BODY PARSER
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    return app
}