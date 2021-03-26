const model_Table_Client = require('./client/clientTable_Model')
const model_Table_City = require('./city/cityTable_Model')

//CREATE CLIENT TABLE
model_Table_Client
    .sync()
    .then(() => console.log('Table CLIENT created successfully!'))
    .catch(console.log)
//CREATE CITY TABLE
model_Table_City
    .sync()
    .then(() => console.log('Table CITY created successfully!'))
    .catch(console.log)