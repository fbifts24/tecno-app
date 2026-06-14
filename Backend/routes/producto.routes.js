const express = require('express')
const productoController = require('../controllers/producto.controller')

const router = express.Router()

router.get('/', productoController.obtenerProductosController)

router.get('/:id', productoController.obtenerProductoPorIdController)

router.post('/', productoController.crearProductoController)

router.put('/:id', productoController.actualizarProductoController)

router.patch('/:id', productoController.actualizarParteProductoController)

router.delete('/:id', productoController.eliminarProductoController)

module.exports = router