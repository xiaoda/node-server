const xdb = require('../xdb')
const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  const allCollections = xdb.getAllCollections()
  res.render('xdb/index', {
    allCollections
  })
})

router.get('/collection/:collection', function (req, res, next) {
  const {collection} = req.params
  const collectionJSON = xdb.getCollectionJSON(collection)
  const fields = xdb.getCollectionFieldsName(collectionJSON)
  res.render('xdb/collection', {
    collection,
    collectionJSON,
    fields
  })
})

module.exports = router
