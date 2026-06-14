const SQL = {

  OBTENER_PRODUCTOS: `
    SELECT
      id,
      nombre,
      descripcion,
      precio,
      stock,
      imagen
    FROM productos
    ORDER BY id;
  `,

  OBTENER_PRODUCTO_POR_ID: `
    SELECT
      id,
      nombre,
      descripcion,
      precio,
      stock,
      imagen
    FROM productos
    WHERE id = @id;
  `,

  CREAR_PRODUCTO: `
    INSERT INTO productos (
      nombre,
      descripcion,
      precio,
      stock,
      imagen
    )
    VALUES (
      @nombre,
      @descripcion,
      @precio,
      @stock,
      @imagen
    );
  `,

  ACTUALIZAR_PRODUCTO: `
    UPDATE productos
    SET
      nombre = @nombre,
      descripcion = @descripcion,
      precio = @precio,
      stock = @stock,
      imagen = @imagen
    WHERE id = @id;
  `,

  ELIMINAR_PRODUCTO: `
    DELETE FROM productos
    WHERE id = @id;
  `

};

module.exports = SQL;