/* CONSULTAR LA DISPONIBILIDAD DE LAS HABITACIONES*/ 

let mes= prompt("ingrese el mes en el que desea reservar")

let mes1= "diciembre"
let mes2= "enero"
let mes3= "febrero"
let mes4= "marzo"

if (( mes === mes1 || mes === mes2 || mes === mes3 || mes === mes4)){
    console.log("Tenemos habitaciones disponibles para la fecha seleccionada");
}

else{
    console.log("No tenemos habitaciones disponibles para las fechas seleccionadas");
}
