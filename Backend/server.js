const app = require('./app')
const config = require('./config/config')

app.listen(config.server.port, () => {

  console.log(
    `Servidor iniciado en http://${config.server.host}:${config.server.port}`
  )

})