/**
 * El objetivo de este script es explicar como funciona
 * el "return"
 *  
 */

/**
 * Esta función retorna a si a > b y b en 
 * cualquier otro caso
 * @param {Number} a
 * @param {Number} b
 */
function returnExplicado(a, b) {
    if (a > b) {
        var c = b;
        // cuando llega a este return la función no se ejecuta más
        return a;
        // nunca llega a hacer la siguiente linea
        c = c * 2;
        console.log(c);
    }
    // en caso de que no entre al if, retornamos b
    return b;
}

// resultado1 es 10
var resultado1 = returnExplicado(10, 2);

// resultado2 es 3
var resultado2 = returnExplicado(1, 3);