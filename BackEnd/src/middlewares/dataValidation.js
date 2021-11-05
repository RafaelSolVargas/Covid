const { check } = require('express-validator');
const { isOnlyLetters } = require('../utils/functions');

module.exports = {
    createDataValidator: [
        /* Cidade - Somente Letras */
        check('cidade')
            .notEmpty()
            .withMessage('Cidade cannot be empty')
            .bail()
            .custom(async (value) => {
                if (!await isOnlyLetters(value)) { throw new Error('Cidade só pode ter letras'); }
            }),
        /* Bairro - Somente Letras */
        check('bairro')
            .notEmpty()
            .withMessage('Cidade cannot be empty')
            .bail()
            .custom(async (value) => {
                if (!await isOnlyLetters(value)) { throw new Error('Bairro só pode ter letras'); }
            }),
        check('sexo')
            .notEmpty()
            .withMessage('Sexo não pode ser vazio')
            .bail()
            .isIn(['masculino', 'feminino']),
        check('tosse')
            .notEmpty()
            .withMessage('Tosse não pode ser vazio')
            .isBoolean()
            .withMessage('Tosse precisa ser true ou false'),
        check('obito')
            .notEmpty()
            .withMessage('Obito não pode ser vazio')
            .isBoolean()
            .withMessage('Obito precisa ser true ou false')
    ],
};
