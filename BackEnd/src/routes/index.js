const { Router } = require('express');

/* routes import */
const datasRouter = require('./datas.js')

const router = Router();

/* routers  */
router
    .use('/data', datasRouter)

module.exports = router;
