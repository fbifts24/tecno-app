const productoRepository = require('../repositories/producto.repository')

const { validarId, validarProducto, validarPatch } = require('../validators/producto.validator')


async function obtenerProductosService() {

  const productos =
    await productoRepository.obtenerProductosRepository()

  return productos
}


async function obtenerProductoPorIdService(id) {

  const errores = validarId(id)

  if (errores.length > 0) {
    return errores
  }

  const producto =
    await productoRepository.obtenerProductoPorIdRepository(id)

  return producto
}


async function crearProductoService(producto) {

  const errores = validarProducto(producto)

  if (errores.length > 0) {
    return errores
  }

  const nuevoProducto =
    await productoRepository.crearProductoRepository(producto)

  return nuevoProducto
}


async function actualizarProductoService(id, producto) {

  const errores = [
    ...validarId(id),
    ...validarProducto(producto)
  ]

  if (errores.length > 0) {
    return errores
  }

  const productoExistente =
    await productoRepository.obtenerProductoPorIdRepository(id)

  if (!productoExistente) {
    return null
  }

  const productoActualizado =
    await productoRepository.actualizarProductoRepository(id, producto)

  return productoActualizado
}


async function actualizarParteProductoService(id, datos) {

  const errores = [
    ...validarId(id),
    ...validarPatch(datos)
  ]

  if (errores.length > 0) {
    return errores
  }

  const productoExistente =
    await productoRepository.obtenerProductoPorIdRepository(id)

  if (!productoExistente) {
    return null
  }

  const productoActualizado =
    await productoRepository.actualizarParteProductoRepository(id, datos)

  return productoActualizado
}


async function eliminarProductoService(id) {

  const errores = validarId(id)

  if (errores.length > 0) {
    return errores
  }

  const productoExistente =
    await productoRepository.obtenerProductoPorIdRepository(id)

  if (!productoExistente) {
    return null
  }

  const cambios =
    await productoRepository.eliminarProductoRepository(id)

  if (cambios !== 1) {
    return [
      'No fue posible eliminar el producto'
    ]
  }

  return productoExistente
}


module.exports = {
  obtenerProductosService,
  obtenerProductoPorIdService,
  crearProductoService,
  actualizarProductoService,
  actualizarParteProductoService,
  eliminarProductoService
}