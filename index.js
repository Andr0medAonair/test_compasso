const customExpress = require('./config/customExpress')
const connection = require('./database/connection')
const config = require('config')
const routerClient = require('./routes/router_Client')
const routerCity = require('./routes/router_City')
const app = customExpress()
const ClientNotFound = require('./errors/client_NotFound')
const LocationNotFound = require('./errors/location_NotFound')
const DataNotInput = require('./errors/data_NotInput')
const NotSupported = require('./errors/notSupported')
const InvalidField = require('./errors/invalidField')

//DATABASE
connection
    .authenticate()
    .then(() => {
        console.log("Connection ok!")
    })
    .catch((error) => {
        console.log("Warning: error in connection!")
    })

//TO ROUTER
app.use('/clients', routerClient)
app.use('/cities', routerCity)
//ERRORS
app.use((error, req, res, aux) => {
    let status = 500

    if (error instanceof ClientNotFound || error instanceof LocationNotFound) {
        status = 404
    }

    if (error instanceof DataNotInput || error instanceof InvalidField) {
        status = 400
    }

    if (error instanceof NotSupported) {
        status = 406
    }

    res.status(status)
    res.send(
        JSON.stringify({
            mensagem: error.message,
            id: error.idError
        })
    )
})



//SERVER LISTEN
app.listen(config.get('api.port'), () => {
    console.log("Server is working!")
})