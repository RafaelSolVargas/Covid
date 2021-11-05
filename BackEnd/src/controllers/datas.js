const { v4: uuidv4 } = require('uuid')
const { validationResult } = require('express-validator');
const { Data } = require('../models');

module.exports = {
    createData: async (req, res) => {
        const { cidade, bairro, data, tosse, obito, sexo } = req.body;

        /* Validation  */
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(401).json({ ValidationErrors: errors.array() });

        /* User creating */
        try {
            const covidData = await Data.create(
                {
                    id: uuidv4(),
                    cidade,
                    bairro,
                    data,
                    sexo,
                    tosse,
                    obito,
                },
            );

            return res.status(201).json({ covidData });
        } catch (erro) {
            return res.status(500).json({ UncaughtError: erro.message });
        }
    },
    getData: async (req, res) => {
        const datas = await Data.findAll();

        return res.status(200).json({ datas });
    },
};
