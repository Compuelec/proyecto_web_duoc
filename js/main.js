
// Funcion para alertas 'success' o 'error'
function MensajeAlerta(mensaje, tipo){
    Swal.fire({
        text: mensaje,
        icon: tipo,
    })
}

// Declaración de 'carrito' en el ámbito global
let carrito = [];

window.onload = cargarCarritoDesdeLocalStorage();
// window.onload = ActualizarCarritoIcono();
// window.onload = MostrarCarrito();
// window.onload = cargarProductos();

window.addEventListener('storage', cargarCarritoDesdeLocalStorage);

function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        ActualizarCarritoIcono();
    }
}


// Función para guardar el carrito en el localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para actualizar el carrito y guardar en el localStorage cuando se modifique
function actualizarCarritoYLocalStorage() {
    cargarCarritoDesdeLocalStorage();
    guardarCarritoEnLocalStorage();
    ActualizarCarritoIcono();
}


function AgregarCarrito(codigo, producto, precio, cantidad) {
    const itemExistente = carrito.find(item => item.codigo === codigo);
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            codigo: codigo,
            producto: producto,
            precio: precio,
            cantidad: cantidad
        });
    }
    guardarCarritoEnLocalStorage(); // Guardar el carrito en el localStorage
    const mensaje = `Se agregó el producto ${producto} al carrito`;
    MensajeAlerta(mensaje, 'success');
    ActualizarCarritoIcono();
}

function EliminarProductoCarrito(codigo) {
    const itemIndex = carrito.findIndex(item => item.codigo === codigo);
    if (itemIndex !== -1) {
        if (carrito[itemIndex].cantidad > 1) {
            carrito[itemIndex].cantidad--;
        } else {
            carrito.splice(itemIndex, 1);
        }
        MostrarCarrito();
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guarda el estado del carrito en localStorage
        ActualizarCarritoIcono();
    }
}

function ActualizarCarritoIcono() {
    const carritoIcono = document.getElementById('carrito-icono');
    const carritoCantidad = document.getElementById('carrito-cantidad');
    const enlaceCarrito = document.getElementById('carrito-enlace');
    if (carrito.length > 0) {
        carritoCantidad.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
        enlaceCarrito.style.display = 'block'; 
        carritoIcono.style.display = 'block';  
    } else {
        carritoIcono.style.display = 'none'; 
        enlaceCarrito.style.display = 'none';
    }
}

// Simulamos una BD
const productos = [
    {
        codigo: 'ku-01',
        producto: 'Kuchen de nuez',
        descripcion: 'Disfruta de nuestro tradicional kuchen con nueces y caramelo. Es perfecto para la hora del té, sin embargo también es una buena opción como postre.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/1-2-300x300.jpg',
        url: 'kuchen-nuez.html',
    },
    {
        codigo: 'ku-man-02',
        producto: 'Kuchen de manzana',
        descripcion: 'Disfruta de nuestro tradicional kuchen manzana. Es perfecto para la hora del té, sin embargo también es una buena opción como postre. Una preparación para compartir con toda la familia.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/2-1-300x300.jpg',
        url: 'kuchen-manzana.html',
    },
    {
        codigo: 'ku-aran-03',
        producto: 'Kuchen de arándanos y frambuesa',
        descripcion: 'Disfruta de nuestro Kuchen de arándanos y frambuesa con miga, es una excelente eleccion para compartir con toda la familia.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/3-1-300x300.jpg',
        url: 'kuchen-arandanos-frambuesa.html',
    },
    {
        codigo: 'pie-04',
        producto: 'Pie de maracuyá y merengue',
        descripcion: 'Delicioso pie con crema de maracuyá y merengue.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/5-1-300x300.jpg',
        url: 'pie-maracuya-merengue.html',
    },
    {
        codigo: 'chees-05',
        producto: 'Cheesecake de frambuesa',
        descripcion: 'Suave y cremoso cheesecake de frutos rojos con frescos arándanos y con salsa de frambuesa.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/7-1-300x300.jpg',
        url: 'cheesecake-frambuesa.html',
    },
    {
        codigo: 'chees-mara-06',
        producto: 'Cheesecake de maracuyá',
        descripcion: 'Suave y cremoso cheesecake de maracuyá, el fruto de la pasión traído desde Centroamérica.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/8-1-300x300.jpg',
        url: 'cheesecake-maracuya.html',
    },
    {
        codigo: 'apple-07',
        producto: 'Apple Pie',
        descripcion: 'Apple Pie relleno de frescas manzanas laminadas con salsa de vainilla y cubierta de miga Streusel.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/Apple-pie-2-300x300.jpg',
        url: 'apple-pie.html',
    },
    {
        codigo: 'chees-choc-08',
        producto: 'Cheesecake de chocolate',
        descripcion: 'Suave y cremoso cheesecake de chocolate.',
        precio: 10000,
        stock: 10,
        imagen: 'img/productos/cheesecake_chocolate_1-300x300.jpg',
        url: 'cheesecake-chocolate.html',
    }
]

function cargarProductos() {
    const container = document.getElementById('productos-container');

    productos.forEach((producto) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto col-lg-3 col-md-4 col-sm-6';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card cardProducto';
        productoDiv.appendChild(cardDiv);

        const imagenProducto = document.createElement('img');
        imagenProducto.src = producto.imagen;
        imagenProducto.className = 'card-img-top';
        cardDiv.appendChild(imagenProducto);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardDiv.appendChild(cardBody);

        const nombreProducto = document.createElement('h5');
        nombreProducto.textContent = producto.producto;
        nombreProducto.className = 'card-title';
        cardBody.appendChild(nombreProducto);

        const descripcionProducto = document.createElement('p');
        descripcionProducto.textContent = producto.descripcion;
        descripcionProducto.className = 'card-text';
        cardBody.appendChild(descripcionProducto);

        const precioProducto = document.createElement('p');
        precioProducto.textContent = `Precio: $${producto.precio}`;
        precioProducto.className = 'card-text';
        cardBody.appendChild(precioProducto);

        const stockProducto = document.createElement('p');
        stockProducto.textContent = `Stock: ${producto.stock}`;
        stockProducto.className = 'card-text';
        cardBody.appendChild(stockProducto);

        const botonAgregar = document.createElement('a');
        botonAgregar.textContent = 'Agregar al carrito';
        botonAgregar.className = 'btn btn-primary';
        botonAgregar.addEventListener('click', () => AgregarCarrito(producto.codigo, producto.producto, producto.precio, 1));
        cardBody.appendChild(botonAgregar);

        const botonDetalle = document.createElement('a');
        botonDetalle.textContent = 'Ver detalles';
        botonDetalle.className = 'btn btn-secondary';
        botonDetalle.href = `${producto.url}`;
        cardBody.appendChild(botonDetalle);

        container.appendChild(productoDiv);
    });
}

$(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {   // puedes ajustar este valor
        $('.navbar').addClass('fixed-top');
    }
    else {
        $('.navbar').removeClass('fixed-top');
    }
});
// Llama a la función cuando la página termine de cargar
window.onload = cargarProductos;


function MostrarCarrito() {
    const tablaCarrito = document.getElementById('tabla-carrito').getElementsByTagName('tbody')[0];
    const totales = document.getElementById('totales');
    tablaCarrito.innerHTML = '';
    totales.innerHTML = '';

    let subtotal = 0;
    let iva = 0;
    let total = 0;

    const productosAgrupados = carrito.reduce((acumulador, productoActual) => {
        const productoExistente = acumulador.find(producto => producto.codigo === productoActual.codigo);
        if (productoExistente) {
            productoExistente.cantidad += productoActual.cantidad;
        } else {
            acumulador.push({...productoActual});
        }
        return acumulador;
    }, []);

    productosAgrupados.forEach((producto, index) => {
        const fila = tablaCarrito.insertRow();
        fila.insertCell().textContent = producto.codigo;
        fila.insertCell().textContent = producto.producto;
        fila.insertCell().textContent = `$${producto.precio}`;

        const cellCantidad = fila.insertCell();
        cellCantidad.classList.add('text-center');
        const botonIncrementar = document.createElement('button');
        botonIncrementar.textContent = '+';
        botonIncrementar.classList.add('btn');
        botonIncrementar.classList.add('btn-primary');
        botonIncrementar.addEventListener('click', () => {
            producto.cantidad++;
            AgregarCarrito(producto.codigo, producto.producto, producto.precio, 1);
            MostrarCarrito();
            localStorage.setItem('carrito', JSON.stringify(carrito));  // Guarda el estado del carrito en localStorage
        });

        const botonDecrementar = document.createElement('button');
        botonDecrementar.textContent = '-';
        botonDecrementar.classList.add('btn');
        botonDecrementar.classList.add('btn-primary');
        botonDecrementar.addEventListener('click', () => {
            EliminarProductoCarrito(producto.codigo);
            MostrarCarrito();
            localStorage.setItem('carrito', JSON.stringify(carrito)); // Guarda el estado del carrito en localStorage
        });

        cellCantidad.appendChild(botonDecrementar);
        cellCantidad.appendChild(document.createTextNode(producto.cantidad));
        cellCantidad.appendChild(botonIncrementar);

        const cellTotal = fila.insertCell();
        cellTotal.classList.add('text-center');
        cellTotal.textContent = `$${producto.precio * producto.cantidad}`;
        
        const cellAcciones = fila.insertCell();
        cellAcciones.classList.add('text-center');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn');
        botonEliminar.classList.add('btn-danger');
        botonEliminar.addEventListener('click', () => {
            // Eliminar producto del carrito
            carrito.splice(index, 1);
            ActualizarCarritoIcono();
            MostrarCarrito();
            localStorage.setItem('carrito', JSON.stringify(carrito));  // Guarda el estado del carrito en localStorage
        });
        cellAcciones.appendChild(botonEliminar);

        subtotal += producto.precio * producto.cantidad;
    });

    iva = subtotal * 0.19;
    total = subtotal + iva;

    totales.innerHTML = `
        <table class="table table-borderless">
            <tr>
                <td class="col-11"><strong>Subtotal:</strong></td>
                <td class="col-1">${formatCurrency(subtotal)}</td>
            </tr>
            <tr>
                <td class="col-11"><strong>IVA (19%):</strong></td>
                <td class="col-1">${formatCurrency(iva)}</td>
            </tr>
            <tr>
                <td class="col-11"><strong>Total:</strong></td>
                <td class="col-1">${formatCurrency(total)}</td>
            </tr>
        </table>
    `;

    function formatCurrency(amount) {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
    }
}
