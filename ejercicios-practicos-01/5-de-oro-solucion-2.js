/**
 * Esta solución del ejercicio es un poco más difícil de pensar, pero más óptima en cuanto a funcionamiento.
 * 
 * Se basa en crear una lista de numeros a la que llamamos bolillero y le vamos "retirando" una bolilla
 * a la vez, elegida al azar, hasta que llegamos a 6 
 */

/**
 * Obtiene un número al azar que va desde 0 hasta max-1
 * @param {Number} max 
 * @returns {Number} un número al hazar entre 0 y max-1
 */
function numeroAlAzar(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Crea un bolillero ordenado con bolillas del 1 a cantidadBolillas 
 * 
 * @param {Number} cantidadBolillas la cantidad de bolillas del bolillero
 * @returns {Array} El bolillero ordenado con cantidadBolillas bolillas. 
 */
function crearBolillero(cantidadBolillas) {
    // creo un arreglo de 48 elementos
    var bolillero = new Array(cantidadBolillas);
    for (var i = 0; i < cantidadBolillas; i = i +1) {
        // en cada lugar del bolillero pongo el número correspondiente
        bolillero[i] = i + 1; 
    }
    return bolillero;
}

/**
 * Esta función saca una bolilla al azar del bolillero, y quita el número del mismo
 * @param {Array} bolillero 
 * @return el número seleccionado al azar del bolillero
 */
function sortearBolilla(bolillero) {
    // obtengo un indice al azar valido para mi bolillero
    var indiceBolilla = numeroAlAzar(bolillero.length);
    // saco la bolilla correspondiente a ese indice.
    var bolilla = bolillero[indiceBolilla];

    // saco la bolilla de entre las disponibles.
    // para eso uso la funcion splice que está presente en cada array, quitando el elemento del indice correspondiente a la bolilla.
    bolillero.splice(indiceBolilla, 1);

    // devuelvo la bolilla sorteada.
    return bolilla;
}

/**
 * Sortea 6 bolillas al azar del bolillero, siendo la última correspondiente a la bolilla extra.
 * 
 * @param {Array} bolillero
 * @returns {Array} los 6 números sorteados al azar 
 */
function realizarSorteo(bolillero) {
    var resultados = [];
    // repito el proceso hasta que tengo 6 resultados (5 numeros + la extra)
    while(resultados.length < 6) {
        // pongo la bolilla sorteada en el último lugar disponible de los resultados. 
        // de esa manera el arreglo se va extendiendo.
        resultados[resultados.length] = sortearBolilla(bolillero);
    }
    return resultados;
}


/**
 * Imprime en consola los resultados del sorteo
 * @param {Array} resultados 
 */
function imprimirResultados(resultados) {
    console.log('Los resultados del 5 de oro del día son: ');
    for (var i = 0; i < 5; i = i + 1) {
        console.log(resultados[i]);
    }
    // la bolilla extra es el último resultado.
    console.log('Bolilla extra: ' + resultados[5]);
}


///////// PROGRAMA PRINCIPAL //////////

// creo el bolillero
var bolillero = crearBolillero(48);
// hago el sorteo
var resultado = realizarSorteo(bolillero);
// imprimo los resultados
imprimirResultados(resultado);
 
