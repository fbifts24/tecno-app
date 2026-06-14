const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const path = require('path')

const config = require('../config/config')

let db = null

async function conectar() {

  if (!db) {

    db = await open({
      filename: path.join(__dirname, config.database.name),
      driver: sqlite3.Database
    })

    console.log('Conexión SQLite establecida')

  }

  return db

}

module.exports = conectar