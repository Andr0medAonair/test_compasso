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

    gender: {
        type: Sequelize.ENUM('M', 'F', 'O'),
        allowNull: false
    },

    birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    city: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'clients',
    timestamps: true,
    createdAt: 'creationDate',
    updatedAt: 'updateDate',
    version: 'version'
}

//module.exports = attributes.model("clientTable_Model", attributes);
module.exports = connection.define('clients', attributes, options);

