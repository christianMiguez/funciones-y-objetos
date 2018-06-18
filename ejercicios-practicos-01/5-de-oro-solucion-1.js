/**
 * Obtiene un número al azar que va desde 0 hasta max-1
 * @param {Number} max 
 * @returns {Number} un número al hazar entre 0 y max-1
 */
function numeroAlAzar(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 * esta función nos dice si la bolilla ya está entre los resultados
 * @param {Number} bolilla 
 * @param {Array} resultados
 * @returns {Boolean} true si resultados ya contiene el número que indica la bolilla 
 */
function esBolillaRepetida(bolilla, resultados) {
    for (var i = 0; i < resultados.length; i = i +1) {
        if (bolilla === resultados[i]) {
            // encontramos la bolilla entre los resultados, así que decimos que está repetida.
            return true;
        }
    }
    // si llega hasta acá, es que la bolilla no está presente entre los resultados. 
    return false;
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

/**
 * Esta funcion nos devuelve un numero al azar entre 1 y 48
 * @returns {Number} un numero entre 1 y 48
 */
function sacarBolilla() {
    return numeroAlAzar(47) + 1;
}


////////// PROGRAMA PRINCIPAL //////////

var resultados = [0, 0, 0, 0, 0, 0];
var resultadoActual = 0;
while (resultadoActual < resultados.length) { // esto se repite hasta que encuentro 6 resultados
    // esta funcion es la que dice en MDN. le sumamos 1 para que sea de 1 a 48 
    var bolilla = sacarBolilla();

    while (esBolillaRepetida (bolilla, resultados)) {  // esta funcion la tienen que hacer
        
        bolilla = sacarBolilla(); // saco una nueva bolilla porque la anterior estaba repetida
        
    } // fin del while de bolilla repetida.

    resultados[resultadoActual] = bolilla; // agrego la bolilla que no se repite a mis resultados
    resultadoActual = resultadoActual + 1; // me preparo para sacar el proximo resultado
}

// en este punto, resultados ya tiene los 6 numeros (5 + la extra)
imprimirResultados(resultados);