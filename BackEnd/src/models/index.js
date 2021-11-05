const fs = require('fs');
const Sequelize = require('sequelize')
const path = require('path');
const basename = path.basename(__filename);
const config = require('../config/dbConfig')

const db = {};
let sequelize;

async function stablishConnection() {
    return new Promise((resolve, reject) => {
        sequelize = new Sequelize(config);

        sequelize
            .authenticate()
            .then(() => {
                db.sequelize = sequelize
                resolve(sequelize)
            })
            .catch((err) => {
                console.error("Unable to connect to the database:", err)
                reject('Connection with database failed')
            });
    })
}

async function syncModels(sequelize) {
    /* Passa por todos os arquivos dessa pasta e importa o Model, executando e guardando no obj db */
    fs
        .readdirSync(__dirname)
        .filter(
            (file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'),
        )
        .forEach((file) => {
            const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
            db[model.name] = model;
        });
}

db.stablishConnection = stablishConnection
db.syncModels = syncModels
module.exports = db;
