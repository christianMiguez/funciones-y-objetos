
/**
 * Esta función le pide al usuario un ingrediente y nos devuelve lo que el usuario ingresó
 * @returns {String} la palabra que ingresa el usuario
 */
function pedirIngrediente() {
    return prompt('Ingresá un ingrediente para la receta que buscas', '');
}

/**
 * Esta función le pide al usuario que le diga si el plato es caliente o frio y nos devuelve la opcion
 * @returns {String} la palabra que ingresa el usuario
 */
function pedirTemperaturaPlato() {
    return prompt('Ingresá si es un plato frio o caliente');
}

/**
 * Esta función nos dice si la receta contiene el ingrediente.
 * @param {Object} receta 
 * @param {String} ingrediente
 * @returns {Boolean} true si la receta contiene el ingrediente, false en otro caso  
 */
function tieneIngrediente(receta, ingrediente) {
    for (var i = 0; i < receta.ingredientes.length; i = i + 1) {
        if (receta.ingredientes[i] === ingrediente) {
            // algún ingrediente de la receta coincide con el ingrediente
            return true;
        }
    }
    // si llega acá, no encontramos el ingrediente en la receta.
    return false;
}

/**
 * Esta función nos devuelve la primer receta en la lista de recetas que tenga el ingrediente y 
 * temperatura que le pasamos como parámetros.
 * @param {Array} recetas 
 * @param {String} ingrediente 
 * @param {String} temperatura 
 * @returns {Object} la primer receta en la lista que contiene el ingrediente y temperatura adecuadas 
 */
function buscarReceta(recetas, ingrediente, temperatura) {
    for (var i = 0; i < recetas.length; i = i + 1) {
        var receta = recetas[i];
        // encontramos la receta si y solo si tiene el ingrediente y temperatura indicados.
        if (tieneIngrediente(receta, ingrediente) && receta.temperatura === temperatura) {
            return receta;
        }
    }
    return 'No se encontró ninguna receta';
}

///////// PROGRAMA PRINCIPAL //////////

// la lista de recetas. Se le puede agregar cualquier cantidad de elementos extra, 
// estos son solo de ejemplo.
var recetas = [
    {
        nombre: 'Pasta frola',
        ingredientes: ['harina', 'dulce de membrillo', 'azucar', 'manteca'],
        temperatura: 'frio',
        descripcion: 'La receta de pasta frola'
    },
    {
        nombre: 'Huevo frito',
        ingrediente: ['huevo', 'aceite'],
        temperatura: 'caliente',
        descripcion: 'Rompés el huevo, lo tirás al sartén y evitás que se te queme'
    }
];

// pedimos el ingrediente a nuestro usuario
var ingrediente = pedirIngrediente();
// pedimos la temperatura a nuestro usuario
var temperatura = pedirTemperaturaPlato();

// buscamos la receta
var receta = buscarReceta(recetas, ingrediente, temperatura);

// mostramos la receta en consola (podría ser un alert también).
console.log(receta);
