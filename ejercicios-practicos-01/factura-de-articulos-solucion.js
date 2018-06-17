/**
 * Para resolver este ejercicio, primero defino algunas funciones 
 * que me van a ayudar a resolver el ejercicio
 */

/**
 * Esta función calcula el IVA de cualquier precio.
 * @param {Number} precio 
 */
function calcularIva(precio) {
    return precio * 0.23;
}

/**
 * Esta función imprime en consola la línea que corresponde a un producto a partir de su nombre, 
 * precio e iva.
 * @param {String} nombre
 * @param {Number} precio 
 * @param {Number} iva 
 */
function imprimirProducto(nombre, precio, iva) {
    console.log(nombre + ' - ' + precio + ' - ' + iva);
}

/**
 * Esta función nos imprime los mensajes necesarios acerca del precio e IVA totales de los productos.
 * @param {Number} precioTotal 
 * @param {Number} ivaTotal 
 */
function imprimirTotales(precioTotal, ivaTotal) {
    console.log('Total sin el IVA: ' + precioTotal);
    console.log('IVA: ' + ivaTotal);
    console.log('Total con IVA incluído: ' + (precioTotal + ivaTotal));
}

////////// EMPIEZA EL PROGRAMA PRINCIPAL ////////////

var factura = [
    ['Pendrive 16GB', 230],
    ['Memoria MicroSD 8GB', 150],
    ['Disco Duro Externo 2TB', 3300],
    ['Pack de 100 DVDs virgenes', 500],
    ['Router Inalambrico 300Mbps', 750],
    ['Impresora Laser comun', 2500],
    ['Teclado común para PC', 120],
    ['Mouse optico USB', 130],
    ['Monitor LCD 19 pulgadas', 2100],
    ['Placa de video 1Gb DDR3', 2050]
];

// esta variable guardará la suma de precio de todos los productos.
var precioTotal = 0;
// esta variable guardará la suma de IVA de todos los productos.
var ivaTotal = 0;

// recorro todos los productos dentro de la factura
for (var i = 0; i < factura.length; i++) {
    var producto = factura[i];
    // el precio del producto está en el segundo lugar de cada producto
    var precioProducto = producto[1]; 
    // el nombre del producto está en el primer lugar de cada producto.
    var nombreProducto = producto[0];
    // calculo el IVA usando mi función para eso.
    var ivaProducto = calcularIva(precioProducto);
    // imprimo la linea correspondiente al producto.
    imprimirProducto(nombreProducto, precioProducto, ivaProducto);
    
    // sumo al precio e iva totales lo correspondiente a este producto:
    precioTotal = precioTotal + precioProducto;
    ivaTotal = ivaTotal + ivaProducto;
}

// imprimo los mensajes de los totales!
imprimirTotales(precioTotal, ivaTotal);
