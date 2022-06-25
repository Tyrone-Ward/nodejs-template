const express = require('express')
const router = express.Router()

exports.homePage = (req, res) => {
  res.status(200).send('hello world')
}
