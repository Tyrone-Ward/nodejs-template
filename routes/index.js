const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.homePage)

router.post('/registerUser/', indexController.registerUser)

module.exports = router
