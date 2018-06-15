/**
 * esta funcion me devuelve el mayor valor entre a y b
 */
function mayor(a, b){
    if( a > b) {
        // a es mayor que b
        return a;
    } else if ( b > a) {
        return b;
    } else {
      return a;
    }
}

var numeroMayor = mayor(54, 54);
console.log(numeroMayor);
console.log(2*numeroMayor);