// const multerConfig = require('../config/multer'); --> Configuração para salvar arquivo
const { Router } = require('express');

/* Controllers */
const { createData, getData, createCsvData } = require('../controllers/datas');

/* Validations */
const { createDataValidator } = require('../middlewares/dataValidation');

const dataRouter = Router();
const multer = require('multer');
const multerConfig = multer() // Config para montar csv 

dataRouter
    .get('/', getData) // Busca todos os dados
    .post('/', createDataValidator, createData) // Cria um caso de covid
    .post('/file', multer(multerConfig).single('file'), createCsvData); // Carrega dados de covid

module.exports = dataRouter;
