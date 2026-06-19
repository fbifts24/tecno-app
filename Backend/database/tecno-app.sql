-- ELIMINAR TABLA SI EXISTE
DROP TABLE IF EXISTS productos;

-- CREAR TABLA PRODUCTOS
CREATE TABLE productos (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nombre TEXT NOT NULL,

    descripcion TEXT NOT NULL,

    precio REAL NOT NULL,

    stock INTEGER NOT NULL,

    imagen TEXT NOT NULL

);

-- DATOS INICIALES
INSERT INTO productos (
    nombre,
    descripcion,
    precio,
    stock,
    imagen
)
VALUES
(
    'Notebook Lenovo',
    'Notebook Lenovo ThinkPad E14',
    1200000,
    5,
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
),
(
    'Monitor Samsung',
    'Monitor LED Full HD de 24 pulgadas',
    350000,
    8,
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf'
),
(
    'Teclado Mecánico Redragon',
    'Teclado mecánico RGB para gaming',
    85000,
    12,
    'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae'
),
(
    'Mouse Logitech MX Master',
    'Mouse inalámbrico ergonómico profesional',
    45000,
    0,
    'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46'
),
(
    'Auriculares Sony WH1000XM5',
    'Auriculares con cancelación de ruido',
    180000,
    4,
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
),
(
    'Tablet Samsung Galaxy Tab',
    'Tablet Android de 10 pulgadas',
    520000,
    7,
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0'
),
(
    'iPhone 15',
    'Smartphone Apple iPhone 15 128GB',
    1800000,
    3,
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
),
(
    'Samsung Galaxy S25',
    'Smartphone Samsung Galaxy S25',
    1650000,
    6,
    'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf'
),
(
    'Smart TV LG 55',
    'Televisor Smart TV 4K UHD de 55 pulgadas',
    950000,
    5,
    'https://images.unsplash.com/photo-1593784991095-a205069470b6'
),
(
    'PlayStation 5',
    'Consola Sony PlayStation 5',
    1200000,
    2,
    'https://images.unsplash.com/photo-1606813907291-d86efa9b94db'
),
(
    'Xbox Series X',
    'Consola Microsoft Xbox Series X',
    1150000,
    4,
    'https://images.unsplash.com/photo-1621259182978-fbf93132d53d'
),
(
    'Nintendo Switch OLED',
    'Consola portátil Nintendo Switch OLED',
    850000,
    7,
    'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e'
),
(
    'Webcam Logitech C920',
    'Webcam Full HD para videoconferencias',
    65000,
    10,
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3'
),
(
    'Impresora HP Ink Tank',
    'Impresora multifunción con sistema continuo',
    280000,
    4,
    'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6'
),
(
    'Disco SSD Kingston 1TB',
    'Unidad SSD SATA de 1TB',
    110000,
    15,
    'https://images.unsplash.com/photo-1591488320449-011701bb6704'
),
(
    'Disco Externo Seagate 2TB',
    'Disco rígido externo USB 3.0',
    130000,
    9,
    'https://images.unsplash.com/photo-1531492746076-161ca9bcad58'
),
(
    'Router TP-Link AX3000',
    'Router WiFi 6 de alta velocidad',
    145000,
    8,
    'https://images.unsplash.com/photo-1647427060118-4911c9821b82'
),
(
    'Parlante JBL Flip 6',
    'Parlante Bluetooth portátil resistente al agua',
    175000,
    11,
    'https://images.unsplash.com/photo-1589003077984-894e133dabab'
),
(
    'Smartwatch Apple Watch',
    'Reloj inteligente Apple Watch Series 10',
    980000,
    3,
    'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d'
),
(
    'Notebook Dell Inspiron',
    'Notebook Dell Inspiron 15 pulgadas',
    1350000,
    6,
    'https://images.unsplash.com/photo-1622286346003-c5c7e63b1088'
);

-- CONSULTA DE PRUEBA
SELECT *
FROM productos;

-- BORRAR CONTENIDO DE LA TABLA Y REINICIALIZAR ID
DELETE FROM productos;

DELETE FROM sqlite_sequence
WHERE name = 'productos';