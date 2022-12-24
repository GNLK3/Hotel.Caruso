/* ELEGI EL MES */

let fecha = prompt("Elegi el numero del mes en el que deseas viajar")

switch (fecha){
    case "0":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 0, 8).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 0, 16).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;
    
    case "1":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 1).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 1, 15).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "2":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 2, 10).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 2, 17).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "3":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 3, 2).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 3, 9).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "4":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 4, 1).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 4, 10).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "5":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 5, 20).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 5, 30).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "6":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 6, 4).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 6, 19).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "7":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 7, 1).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 7, 20).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "8":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 8, 1).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 8, 30).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "9":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 9, 4).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 9, 28).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "10":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 10, 7).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 10, 15).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;

    case "11":
        console.log("TENEMOS HABITACIONES DISPONIBLES PARA LOS SIGUIENTES DIAS:");
        console.log(new Date(2023, 11, 15).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        console.log(new Date(2023, 11, 31).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"long", day:"numeric"}));
        break;
    
    default:
        console.log("datos incorrectos");
        break;
}  

/* FILTRAR HABITACIONES POR LOS PRECIOS*/

console.log("LISTADO DE PRECIOS DE LAS HABITACIONES POR NOCHE");
const hotel = [
    {nombre: "Standard", precio: 100},
    {nombre: "Standard Doble", precio: 150},
    {nombre: "Suite", precio: 250},
    {nombre: "Suite Doble", precio: 350},
    {nombre: "Presidencial", precio: 500},
    {nombre: "Presidencial Doble", precio: 600},
]

for (const habitaciones of hotel){ 
    console.log(habitaciones.nombre);    
    console.log(habitaciones.precio);    
}

let prec = prompt("ingrese el precio maximo de la habitacion")

const eleccion = hotel.filter((el) => el.precio < prec)

console.log("LAS HABITACIONES DISPONIBLES POR EL PRECIO SOLICITADO SON:");
console.log(eleccion);


/* CALCULAR IMPUESTO DOLAR PARA LAS HABITACIONES */

const impuesto = eleccion.map ((el) => {
    return{
        nombre: el.nombre,
        precio: el.precio * 1.30
    }
})

console.log("PRECIO FINAL + IMPUESTOS");
console.log(impuesto);

