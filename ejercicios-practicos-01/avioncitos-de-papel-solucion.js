
/**
 * esta función me permite poner un mensaje de alerta según el número 
 * que indique cantidadDeAvioncitos. 
 * Por la letra, los rangos son de 0 a 4
 * @param {Number} cantidadDeAvioncitos 
 */
function medirAdiccion(cantidadDeAvioncitos) {
    if (cantidadDeAvioncitos >= 0 && cantidadDeAvioncitos <= 4) {
        alert('No sos adicto/a');
    } else if (cantidadDeAvioncitos >= 5 && cantidadDeAvioncitos <= 9) {
        alert('Formás parte de la población de riesgo');
    } else if (cantidadDeAvioncitos >= 10 && cantidadDeAvioncitos <= 20) {
        alert('Claramente sos adicto/a');
    } else if (cantidadDeAvioncitos > 20) {
        alert('Estás más limado/a que Diegote');
    }
}

// esta variable va a guardar el numero ingresado por el usuario
var opcion = 0; 

// repetimos el proceso mientras que el usuario no ingresa un número menor a 0
while (opcion >= 0) { 
    // le pedimos al usuario que ingrese cuántos avioncitos de papel hace al día
    // lo transformamos en un entero con parseInt
    opcion = parseInt(prompt('¿Cuántos avioncitos de papel hacés al día?', 0));
    // medimos su nivel de adicción
    medirAdiccion(opcion);
    console.log(opcion);    
}

// Si llega acá, quiere decir que el usuario me ingresó -1 (o un número menor que 0 en general)
alert('¡Chau!');