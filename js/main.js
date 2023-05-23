
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
        precio: 1000,
        stock: 10,
        imagen: 'img/productos/1-2-300x300.jpg'
    },
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