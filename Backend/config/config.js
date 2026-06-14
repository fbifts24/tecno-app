require('dotenv').config()

module.exports = {

  server: {
    host: process.env.HOST,
    port: Number(process.env.PORT)
  },

  database: {
    name: process.env.DB_NAME
  },
}