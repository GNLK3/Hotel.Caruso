/* FILTRAR HABITACIONES POR LOS PRECIOS*/

const hotel = [
    {nombre: "Standard", precio: 250},
    {nombre: "Standard Doble", precio: 300},
    {nombre: "Suite", precio: 400},
    {nombre: "Suite Doble", precio: 450},
    {nombre: "Presidencial", precio: 600},
    {nombre: "Presidencial Doble", precio: 700},
]

for (const habitaciones of hotel){ 
    console.log(habitaciones.nombre);    
    console.log(habitaciones.precio);    
}

let prec = prompt("ingrese el precio maximo de la habitacion")

const eleccion = hotel.filter((el) => el.precio < prec)

console.log(eleccion);


/* CALCULAR IMPUESTO DOLAR PARA LAS HABITACIONES */



/* ELEGI EL MES */

let fecha = prompt("Elegi el numero del mes en el que deseas alquilar")

switch (fecha){
    case "0":
        console.log(new Date(2023, 0).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;
    
    case "1":
        console.log(new Date(2023, 1).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "2":
        console.log(new Date(2023, 2).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "3":
        console.log(new Date(2023, 3).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "4":
        console.log(new Date(2023, 4).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "5":
        console.log(new Date(2023, 5).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "6":
        console.log(new Date(2023, 6).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "7":
        console.log(new Date(2023, 7).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "8":
        console.log(new Date(2023, 8).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "9":
        console.log(new Date(2023, 9).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "10":
        console.log(new Date(2023, 10).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;

    case "11":
        console.log(new Date(2023, 11).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
        break;
    
    default:
        console.log("datos incorrectos");
        break;
}  



