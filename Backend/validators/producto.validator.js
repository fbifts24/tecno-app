function validarId(id) {

  const errores = []

  if (id === undefined || id === null || isNaN(id)) {
    errores.push('El ID del producto no es valido')
  }

  return errores
}

function validarProducto(producto) {

  const errores = []

  if (!producto) {
    errores.push('Los datos del producto son obligatorios')
    return errores
  }

  if (!producto.nombre) {
    errores.push('El nombre del producto es obligatorio')
  }

  if (!producto.descripcion) {
    errores.push('La descripcion del producto es obligatoria')
  }

  if (producto.precio === undefined ||
    producto.precio === null ||
    isNaN(producto.precio)) {

    errores.push('El precio del producto es obligatorio y debe ser numerico')
  } else if (producto.precio < 0) {

    errores.push('El precio no puede ser negativo')
  }

  if (producto.stock === undefined ||
    producto.stock === null ||
    isNaN(producto.stock)) {

    errores.push('El stock del producto es obligatorio y debe ser numerico')

  } else if (producto.stock < 0) {

    errores.push('El stock no puede ser negativo')
  }

  if (!producto.imagen) {
    errores.push('La imagen del producto es obligatoria')
  }

  return errores
}

function validarPatch(datos) {

  const errores = []

  const camposPermitidos = ['nombre', 'descripcion', 'precio', 'stock', 'imagen']

  if (!datos || Object.keys(datos).length === 0) {
    errores.push('Debe enviar al menos un campo para actualizar')

    return errores
  }

  Object.keys(datos).forEach(campo => {
    if (!camposPermitidos.includes(campo)) {
      errores.push(`El campo ${campo} no se puede actualizar`)
    }
  })

  if (
    datos.precio !== undefined &&
    (datos.precio === null || isNaN(datos.precio))
  ) {

    errores.push(
      'El precio debe ser numerico'
    )

  } else if (datos.precio < 0) {

    errores.push(
      'El precio no puede ser negativo'
    )

  }

  if (
    datos.stock !== undefined &&
    (datos.stock === null || isNaN(datos.stock))
  ) {

    errores.push(
      'El stock debe ser numerico'
    )

  } else if (datos.stock < 0) {

    errores.push(
      'El stock no puede ser negativo'
    )

  }

  if (datos.nombre !== undefined && !datos.nombre) {
    errores.push('El nombre del producto no puede estar vacio')
  }

  if (datos.descripcion !== undefined && !datos.descripcion) {
    errores.push('La descripcion del producto no puede estar vacia')
  }

  if (datos.imagen !== undefined && !datos.imagen) {
    errores.push('La imagen del producto no puede estar vacia')
  }

  return errores
}

module.exports = {
  validarId,
  validarProducto,
  validarPatch
}