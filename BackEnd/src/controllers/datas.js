const { v4: uuidv4 } = require('uuid')
const { Data } = require('../models');
const { Readable } = require('stream')
const readline = require('readline');

module.exports = {
    createData: async (req, res) => {
        const { cidade, bairro, data, tosse, obito, sexo } = req.body;
        console.log(data)

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
    createCsvData: async (req, res) => {
        const { file } = req;
        const { buffer } = file;

        const readableFile = new Readable();
        readableFile.push(buffer)
        readableFile.push(null)

        const covidLine = readline.createInterface({
            input: readableFile
        })


        const arrayData = []
        let first = true
        for await (let line of covidLine) {
            if (first) {
                first = false
                continue

                const lineSplit = line.split(';')
                // Mapeamento das colunas na primeira iteração
                for (let x = 0; x++; x < lineSplit.length) {
                    if (lineSplit[x] == 'cidade') indexes['cidade'] = x
                    if (lineSplit[x] == 'bairro') indexBairro = x
                }

            }
            const lineSplit = line.split(';')
            const data = new Date(lineSplit[2])

            arrayData.push({
                id: uuidv4(),
                cidade: lineSplit[0],
                bairro: lineSplit[1],
                data,
                tosse: lineSplit[3],
                obito: lineSplit[4],
                sexo: lineSplit[5]
            })
        }
        console.log('Aqui')
        try {
            const covidDatas = await Data.bulkCreate(arrayData)

            console.log('Sucesso')
            return res.status(200).json(covidDatas)
        } catch (err) {
            console.log('Teve erro')
            return res.status(500).json({ err: err.message })
        }
    },
    getData: async (req, res) => {
        const datas = await Data.findAll();

        return res.status(200).json({ datas });
    },
};
