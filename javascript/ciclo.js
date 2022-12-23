/* CONSULTAR LOS PRECIOS DE LAS HABITACIONES*/

/* let habitacion = prompt("Ingresa el tipo de habitacion")

switch (habitacion){
    case "Standard":
        console.log("La habitacion Standard tiene un precio de $10000 por noche");
        break;

    case "Suite":
        console.log("La habitacion Suite tiene un precio de $20000 por noche");
        break;

    case "Presidencial":
        console.log("La habitacion Presidencial tiene un precio de $30000 por noche");
        break;
    
    default:
        console.log("Los datos ingresados no corresponden a ninguna de nuestras habitaciones");
        break;
}  */

//////////

/* const habitacion = [
    {nombre: "Standard", precio: 10000},
    {nombre: "Standard Doble", precio: 20000},
    {nombre: "Suite", precio: 30000},
    {nombre: "Suite Doble", precio: 40000},
    {nombre: "Presidencial", precio: 50000},
    {nombre: "Presidencial Doble", precio: 60000},
]

let prec = prompt("ingrese el precio maximo que desea pagar")

const eleccion = habitacion.filter((el) => el.precio < prec)

console.log(eleccion);

 */

//////////

/* class Habitacion {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase ();
        this.precio = parseFloat (precio);
        this.nodisponible = false;
    }

    sumaImpuestoPais (){
        this.precio = this.precio * 0.3;
    }
}

const habitaciones = [];

habitaciones.push (new Habitacion("Standard", 10000));
habitaciones.push (new Habitacion("StandardDoble", 20000));
habitaciones.push (new Habitacion("Suite", 30000));
habitaciones.push (new Habitacion("SuiteDoble", 40000));
habitaciones.push (new Habitacion("Presidencial", 50000));
habitaciones.push (new Habitacion("PresidencialDoble", 60000));

for (const Habitacion of habitaciones)
    console.log(Habitacion.sumaImpuestoPais); 
 */

///////////////

