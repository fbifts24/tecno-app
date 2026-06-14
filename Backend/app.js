const express = require('express')
const cors = require('cors')

const productoRoutes = require('./routes/producto.routes')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', function(req, res) {

  res.status(200).send('<h1>API TecnoApp funcionando!!!</h1>')

})

app.use('/api/productos', productoRoutes)

module.exports = app