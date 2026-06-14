const conectar = require('../database/conexion')

const SQL = require('../sql/producto.sql')


async function obtenerProductosRepository() {

  const db = await conectar()

  const productos = await db.all(SQL.OBTENER_PRODUCTOS)

  console.table(productos)
  return productos

}

async function obtenerProductoPorIdRepository(id) {

  const db = await conectar()

  const resultado = await db.get(
    SQL.OBTENER_PRODUCTO_POR_ID,
    {
      '@id': id
    }
  )

  console.table(resultado)
  return resultado

}

async function crearProductoRepository(producto) {

  const db = await conectar()

  const resultado = await db.run(
    SQL.CREAR_PRODUCTO,
    {
      '@nombre': producto.nombre,
      '@descripcion': producto.descripcion,
      '@precio': producto.precio,
      '@stock': producto.stock,
      '@imagen': producto.imagen
    }
  )

  const productoCreado = await db.get(
    SQL.OBTENER_PRODUCTO_POR_ID,
    {
      '@id': resultado.lastID
    }
  )

  console.table(productoCreado)
  return productoCreado

}

async function actualizarProductoRepository(id, producto) {

  const db = await conectar()

  await db.run(
    SQL.ACTUALIZAR_PRODUCTO,
    {
      '@id': id,
      '@nombre': producto.nombre,
      '@descripcion': producto.descripcion,
      '@precio': producto.precio,
      '@stock': producto.stock,
      '@imagen': producto.imagen
    }
  )

  const productoActualizado = await db.get(
    SQL.OBTENER_PRODUCTO_POR_ID,
    {
      '@id': id
    }
  )

  console.table(productoActualizado)
  return productoActualizado

}

async function actualizarParteProductoRepository(id, datos) {
  const db = await conectar();

  const campos = [];
  const parametros = {
    '@id': id
  };

  Object.keys(datos).forEach(campo => {

    campos.push(`${campo} = @${campo}`);

    parametros[`@${campo}`] = datos[campo];

  });

  const sql = `
    UPDATE productos
    SET ${campos.join(', ')}
    WHERE id = @id;
  `;

  await db.run(sql, parametros);

  return await db.get(
    SQL.OBTENER_PRODUCTO_POR_ID,
    {
      '@id': id
    }
  );

}

async function eliminarProductoRepository(id) {

  const db = await conectar()

  const resultado = await db.run(
    SQL.ELIMINAR_PRODUCTO,
    {
      '@id': id
    }
  )

  return resultado.changes

}

module.exports = {
  obtenerProductosRepository,
  obtenerProductoPorIdRepository,
  crearProductoRepository,
  actualizarProductoRepository,
  actualizarParteProductoRepository,
  eliminarProductoRepository
}