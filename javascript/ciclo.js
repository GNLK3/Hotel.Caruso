/* CONSULTAR LOS PRECIOS DE LAS HABITACIONES */

let habitacion = prompt("Ingresa el tipo de habitacion")

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
} 
