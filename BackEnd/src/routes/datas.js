const { Router } = require('express');

/* Controllers */
const { createData, getData } = require('../controllers/datas');

/* Validations */
const { createDataValidator } = require('../middlewares/dataValidation');

const dataRouter = Router();

dataRouter
    .get('/', getData) // Busca todos os dados
    .post('/', createDataValidator, createData); // Cria um caso de covid

module.exports = dataRouter;
