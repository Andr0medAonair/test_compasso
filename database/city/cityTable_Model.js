const connection = require('../connection')
const Sequelize = require('sequelize')

const attributes = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    state: {
        type: Sequelize.STRING,
        allowNull: false
    }
}


const options = {
    freezeTableName: true,
    tableName: 'cities',
    timestamps: true,
    createdAt: 'creationDate',
    updatedAt: 'updateDate',
    version: 'version'
}

module.exports = connection.define('cities', attributes, options)