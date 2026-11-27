const express = require('express')
const router = express.Router()

const { getRandomFact } = require('../controllers/catFactController')

router.get('/random', getRandomFact)

module.exports = router