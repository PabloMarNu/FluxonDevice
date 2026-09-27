
const productos = {};

// =========================
// OBTENER PRODUCTO
// =========================

const parametros = new URLSearchParams(
    window.location.search
);

const idProducto = parametros.get("id");

const producto = productos[idProducto];


// =========================
// COMPROBAR PRODUCTO
// =========================

if (!producto) {

    window.location.href = "index.html#productos";

} else {
    // =========================
// SEO
// =========================

document.title =
    `${producto.nombre} ${producto.capacidad} · FluxonDevice`;


const metaDescription =
    document.querySelector(
        'meta[name="description"]'
    );

if (metaDescription) {

    metaDescription.setAttribute(
        "content",
        `${producto.nombre} ${producto.capacidad} ${producto.color}. Dispositivo Apple revisado por FluxonDevice, con ${producto.bateria} de batería y estado ${producto.estado}.`
    );

}
    // =========================
    // INFORMACIÓN PRINCIPAL
    // =========================

    document.getElementById("product-name").textContent =
        producto.nombre;

    document.getElementById("product-subtitle").textContent =
        `${producto.capacidad} · ${producto.color}`;

    document.getElementById("product-price").textContent =
        producto.precio;


    // =========================
    // DISPONIBILIDAD
    // =========================

    document.getElementById("product-availability").textContent =
        producto.disponible
            ? "Disponible"
            : "Agotado";


    // =========================
    // ESTADO
    // =========================

    document.getElementById("product-condition").textContent =
        producto.estado;

    document.getElementById("product-condition-description").textContent =
        producto.descripcionEstado;


    // =========================
    // ESPECIFICACIONES
    // =========================

    document.getElementById("product-capacity").textContent =
        producto.capacidad;

    document.getElementById("product-battery").textContent =
        producto.bateria;

    document.getElementById("product-color").textContent =
        producto.color;

    document.getElementById("product-state").textContent =
        producto.estado;
    // =========================
// ESTADO FÍSICO
// =========================

document.getElementById("product-screen-condition").textContent =
    producto.pantalla;

document.getElementById("product-frame-condition").textContent =
    producto.marco;

document.getElementById("product-back-condition").textContent =
    producto.trasera;


// =========================
// PRUEBAS REALIZADAS
// =========================

document.getElementById("test-screen").style.display =
    producto.pruebas.pantalla ? "flex" : "none";

document.getElementById("test-cameras").style.display =
    producto.pruebas.camaras ? "flex" : "none";

document.getElementById("test-faceid").style.display =
    producto.pruebas.faceID ? "flex" : "none";

document.getElementById("test-speakers").style.display =
    producto.pruebas.altavoces ? "flex" : "none";

document.getElementById("test-microphones").style.display =
    producto.pruebas.microfonos ? "flex" : "none";

document.getElementById("test-buttons").style.display =
    producto.pruebas.botones ? "flex" : "none";

document.getElementById("test-charging").style.display =
    producto.pruebas.carga ? "flex" : "none";

document.getElementById("test-wifi").style.display =
    producto.pruebas.wifi ? "flex" : "none";

document.getElementById("test-bluetooth").style.display =
    producto.pruebas.bluetooth ? "flex" : "none";


// =========================
// PIEZAS
// =========================

document.getElementById("part-battery").textContent =
    producto.piezas.bateria;

document.getElementById("part-screen").textContent =
    producto.piezas.pantalla;

document.getElementById("part-camera").textContent =
    producto.piezas.camara;
    // =========================
    // DESCRIPCIÓN
    // =========================

    document.getElementById("product-description").textContent =
        producto.descripcion;


    // =========================
    // BREADCRUMB
    // =========================

    document.getElementById("product-breadcrumb").textContent =
        producto.nombre;
        // =========================
    // BOTÓN DE COMPRA
    // =========================

const botonCompra =
    document.querySelector(".purchase-button");

if (botonCompra) {

    if (producto.disponible) {

        const asunto =
            `Interés en ${producto.nombre} · ${producto.capacidad}`;

        const cuerpo =
`Hola,

Estoy interesado en el siguiente dispositivo:

Dispositivo: ${producto.nombre}
Capacidad: ${producto.capacidad}
Color: ${producto.color}
Precio: ${producto.precio}

¿Sigue disponible?

Un saludo.`;

        botonCompra.href =
            `mailto:ventas@fluxondevice.es` +
            `?subject=${encodeURIComponent(asunto)}` +
            `&body=${encodeURIComponent(cuerpo)}`;

        botonCompra.textContent =
            "Comprar dispositivo";

        botonCompra.classList.remove("disabled");

    } else {

        botonCompra.removeAttribute("href");

        botonCompra.textContent =
            "Dispositivo agotado";

        botonCompra.classList.add("disabled");

    }
}
}