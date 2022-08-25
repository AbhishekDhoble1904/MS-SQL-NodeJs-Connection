const express = require('express')
const router = express()
const getSample = require('../controller/sam')


// router.use(bodyparser.json())
router.get('/', getSample.getSample)

module.exports = router;