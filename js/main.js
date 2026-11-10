/* EJERCICIO 1 
Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones.

Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8 */

//PRIMERO - creo clase objeto
class NotasAlumno {
    constructor(nombre, notaIngles, notaProgramación, notaHtml) {
        this.nombre = nombre;
        this.notaIngles = notaIngles;
        this.notaProgramación = notaProgramación;
        this.notaHtml = notaHtml;

        //funcion
        this.notaMedia = function () {
            const media = (this.notaIngles + this.notaProgramación + this.notaHtml) / 3
            return `La nota media de ${this.nombre} es ${media}`
        }
    }
}


//crear nuevo objeto con valores y ejecutar la funcion.
const notasAlumno1 = new NotasAlumno('Juan', 9, 8, 7);
console.log(notasAlumno1.notaMedia())




/* EJERCICIO 2 
Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado.

Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100). */

// const vestido = {
//     precio: 0,
//     descuento: 0,
//     metodoNeto: function () {
//         const neto = (this.precio - ((this.descuento * this.precio) / 100))
//         return neto
//     }
// }

// vestido.precio = prompt('Escribe un precio.');
// vestido.descuento = prompt('Escribe un descuento');
// console.log(vestido.metodoNeto())




/* EJERCICIO 3
En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos propiedades: masa, volumen y un método densidad que calcule este valor (masa/volumen). Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.

Por ejemplo objeto oro, masa de la muestra 194 gr y volumen 10 cc. Densidad deberá devolver 19,4. */

class NombrePiedra {
    constructor(masa, volumen) {
        this.masa = masa;
        this.volumen = volumen;

        //funciones
        this.metodoDensidad = function () {
            const densidad = this.masa / this.volumen
            return `La densidad es ${densidad}`
        }
    }
}

const oro = new NombrePiedra(194, 10);
console.log(oro.metodoDensidad())




/* EJERCICIO 4
Construye una clase usando function para implementar una cuenta de efectivo. Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y retirar(). El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. No se puede sacar más de lo que exista en el saldo. 

A los métodos los invocaremos con las llamadas ingresar(1000) o retirar(100) Tras ingresar el saldo será 1000 y trs retirar el saldo será 900..
*/

let CuentaEfectivo = function (titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;

    //funciones
    this.ingresar = function (cantidadIngresar) {
        this.saldo = this.saldo + cantidadIngresar;
        return this.saldo
    };

    this.retirar = function (cantidadRetirar) {
        this.saldo = this.saldo - cantidadRetirar;
        return this.saldo
    }

}

const CuentaEfectivo1 = new CuentaEfectivo('Oliver', 0)
console.log(CuentaEfectivo1.ingresar(1000))
console.log(CuentaEfectivo1.retirar(100))



/* EJERCICIO 5
Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán

nombre
sesiones
numsesioens

El nombre es el de la persona, en los sesiones se almacenará el número de kilometros recorridos en cada sesión y numsesiones contiene el número de sesiones anotadas.

Tiene dos métodos:

anotar: anota los kilómetros
media: calcula la media de kilómetros recorridos



Aclaraciones:
Cada persona tendrá su ficha construída con esta clase.

Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.

Si escribo media() devolverá 8 ((8+10+6)/3).

En la solución se usa el camino má primitivo posible: arrays y bucles básicos
*/

class Ficha {
    constructor(nombrePersona, sesionesKm, numSesiones) {
        this.nombre = nombrePersona;
        this.sesiones = sesionesKm;
        this.numSesiones = numSesiones;

        //funciones
        this.anotar = function (km) {
            this.sesiones = km
        };

        this.media = function () {

        }


    }
}