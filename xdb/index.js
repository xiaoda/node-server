const fs = require('fs')
const path = require('path')
const glob = require('glob')

const xdb = {
  getAllCollections () {
    const filesPath = path.resolve(__dirname, './data/**/*.json')
    return glob.sync(filesPath).map(collection => {
      return collection.split('/xdb/data/')[1].replace(/\.json$/, '')
    })
  },

  getCollectionJSON (collection) {
    const filePath = path.resolve(__dirname, `./data/${collection}.json`)
    return JSON.parse(fs.readFileSync(filePath), 'utf8')
  },

  getCollectionFieldsName (collectionJSON) {
    return collectionJSON.fields.map(field => field.name)
  }
}

module.exports = xdb
