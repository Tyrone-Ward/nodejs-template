const express = require('express')
const router = express.Router()

exports.homePage = (req, res) => {
  res.status(200).send('hello world')
}
exports.registerUser = (req, res) => {
  userName = req.body.userName
  password = req.body.userName
  res.send(`Welcome, ${userName}.`)
}
