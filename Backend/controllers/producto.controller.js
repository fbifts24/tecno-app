const productoService = require('../services/producto.service')

async function obtenerProductosController(req, res) {

  try {

    const productos = await productoService.obtenerProductosService()

    res.json(productos)

  } catch (error) {

    res.status(500).json({
      mensaje: 'Error al obtener los productos',
      error: error.message
    })

  }

}

async function obtenerProductoPorIdController(req, res) {

  try {

    const id = Number(req.params.id)

    const resultado = await productoService.obtenerProductoPorIdService(id)

    if (Array.isArray(resultado)) {
      return res.status(400).json({
        errores: resultado
      })
    }

    if (!resultado) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado'
      })
    }

    res.json(resultado)

  } catch (error) {

    res.status(500).json({
      mensaje: 'Error al obtener el producto',
      error: error.message
    })

  }

}

async function crearProductoController(req, res) {

  try {

    const producto = req.body

    const resultado = await productoService.crearProductoService(producto)

    if (Array.isArray(resultado)) {
      return res.status(400).json({
        errores: resultado
      })
    }

    res.status(201).json(resultado)

  } catch (error) {

    res.status(500).json({
      mensaje: 'Error al crear el producto',
      error: error.message
    })

  }

}

async function actualizarProductoController(req, res) {

  try {

    const id = Number(req.params.id)
    const producto = req.body

    const resultado = await productoService.actualizarProductoService(id, producto)

    if (Array.isArray(resultado)) {
      return res.status(400).json({
        errores: resultado
      })
    }

    if (!resultado) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado'
      })
    }

    res.json(resultado)

  } catch (error) {

    res.status(500).json({
      mensaje: 'Error al actualizar el producto',
      error: error.message
    })

  }

}

async function actualizarParteProductoController(req, res) {
  try {
    const id = Number(req.params.id)
    const resultado = await productoService.actualizarParteProductoService(id, req.body)

    if (Array.isArray(resultado)) {
      return res.status(400).json({
        errores: resultado
      })
    }

    if (!resultado) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado'
      })
    }

    res.json(resultado)

  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar parcialmente el producto',
      error: error.message
    })

  }

}

async function eliminarProductoController(req, res) {

  try {

    const id = Number(req.params.id)

    const resultado = await productoService.eliminarProductoService(id)

    if (Array.isArray(resultado)) {
      return res.status(400).json({
        errores: resultado
      })
    }

    if (!resultado) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado'
      })
    }

    res.json(resultado)

  } catch (error) {

    res.status(500).json({
      mensaje: 'Error al eliminar el producto',
      error: error.message
    })

  }

}

module.exports = {
  obtenerProductosController,
  obtenerProductoPorIdController,
  crearProductoController,
  actualizarProductoController,
  actualizarParteProductoController,
  eliminarProductoController
}