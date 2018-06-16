/**
 * Con este script creamos un objeto nuevo, persona 
 */

var persona = {
    nombre: 'Maria',
    apellido: 'Lopez',
    edad: 23,
    altura: 1.66
}

console.log('Hola! Soy ' + persona.nombre);


var persona = {
    nombre: 'Maria',
    apellido: 'Lopez',
    edad: 23,
    altura: 1.66,
    /**
     * saludar imprime un mensaje en consola
     */
    saludar: function () {
        // dentro de persona, nos referimos a ella
        // como "this" es decir "esto"
        console.log('Hola! Soy ' + this.nombre);
    },
    /**
     * suma anios a la edad de la persona
     */
    envejecer: function (anios) {
        // nuevamente, "this" se refiere a la persona
        this.edad = this.edad + anios
    }
}

// imprime en pantalla el mensaje "Hola! Soy Maria"
persona.saludar();
// le suma 3 a la edad de Maria
persona.envejecer(3);


var rectangulo = {
    ancho: 10,
    altura: 3,
    area: function() {
        // this se refiere a la variable rectangulo
        // pero desde dentro!
        return this.ancho * this.alto;
    }
}

// SOLO uso "this" desde adentro de la variable. 
// Afuera de ella, la uso por su nombre

console.log(rectangulo.area());
