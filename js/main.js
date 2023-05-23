
// Funcion para alertas 'success' o 'error'
function MensajeAlerta(mensaje, tipo){
    Swal.fire({
        text: mensaje,
        icon: tipo,
    })
}


const productos = [
    {
        codigo: 'ku-01',
        producto: 'Kuchen de nuez',
        descripcion: 'Disfruta de nuestro tradicional kuchen con nueces y caramelo. Es perfecto para la hora del té, sin embargo también es una buena opción como postre.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/1-2-300x300.jpg'
    },
    {
        codigo: 'ku-man-02',
        producto: 'Kuchen de manzana',
        descripcion: 'Disfruta de nuestro tradicional kuchen manzana. Es perfecto para la hora del té, sin embargo también es una buena opción como postre. Una preparación para compartir con toda la familia.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/2-1-300x300.jpg'
    },
    {
        codigo: 'ku-aran-03',
        producto: 'Kuchen de arándanos y frambuesa',
        descripcion: 'Disfruta de nuestro Kuchen de arándanos y frambuesa con miga, es una excelente eleccion para compartir con toda la familia.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/3-1-300x300.jpg'
    },
    {
        codigo: 'pie-04',
        producto: 'Pie de maracuyá y merengue',
        descripcion: 'Delicioso pie con crema de maracuyá y merengue.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/5-1-300x300.jpg'
    },
    {
        codigo: 'chees-05',
        producto: 'Cheesecake de frambuesa',
        descripcion: 'Suave y cremoso cheesecake de frutos rojos con frescos arándanos y con salsa de frambuesa.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/7-1-300x300.jpg'
    },
    {
        codigo: 'chees-mara-06',
        producto: 'Cheesecake de maracuyá',
        descripcion: 'Suave y cremoso cheesecake de maracuyá, el fruto de la pasión traído desde Centroamérica.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/8-1-300x300.jpg'
    },
    {
        codigo: 'apple-07',
        producto: 'Apple Pie',
        descripcion: 'Apple Pie relleno de frescas manzanas laminadas con salsa de vainilla y cubierta de miga Streusel.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/Apple-pie-2-300x300.jpg'
    },
    {
        codigo: 'chees-choc-08',
        producto: 'Cheesecake de chocolate',
        descripcion: 'Suave y cremoso cheesecake de chocolate.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/cheesecake_chocolate_1-300x300.jpg'
    }
]
const carrito = [];

function AgregarCarrito(codigo,producto,precio,cantidad){
    carrito.push({
        codigo: codigo,
        producto: producto,
        precio: precio,
        cantidad: cantidad
    });
    const mensaje = `Se agrego el producto ${producto} al carrito`;
    this.MensajeAlerta(mensaje, 'success');
    console.log(carrito);
}