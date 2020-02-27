const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()
const utils = require('../utils')

router.get('/', (req, res, next) => {
  const jsonFile = path.resolve(__dirname, '../jsondb/demo.json')
  const json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))
  json.logs.forEach(log => {
    log.datetime = utils.formatDatetime(log.timestamp)
  })

  res.render('jsondb', {...json})
})

router.get('/add', (req, res, next) => {
  const timestamp = Date.now()
  const datetime = utils.formatDatetime(timestamp)
  const jsonFile = path.resolve(__dirname, '../jsondb/demo.json')
  const json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))

  if (!json.logs) json.logs = []
  json.logs.unshift({timestamp})
  fs.writeFileSync(jsonFile, JSON.stringify(json), 'utf8')

  res.send(datetime)
})

module.exports = router
