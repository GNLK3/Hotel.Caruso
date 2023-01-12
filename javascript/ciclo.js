/* Formulario de Reservas */

const formFecha = document.querySelector("#formFec")
    fechaIngreso = document.querySelector("#fechaIn")
    fechaSalida = document.querySelector("#fechaOut")
    horario = document.querySelector("#hora")
    email = document.querySelector("#email")

let reservas;

if (localStorage.getItem("reservas")) {
    reservas = JSON.parse(localStorage.getItem("reservas"));
} else{
    reservas = [];
}

class Reserva {
    constructor(fechaIngreso, fechaSalida, horario, email) {
        this.fechaDeIngreso = fechaIngreso;
        this.fechaDeSalida = fechaSalida;
        this.horarioDeIngreso = horario;
        this.email = email;
    }
}

function guardarReserva(reserva){
    return reservas.push(reserva)
}

function guardarEnLS(arr) {
    return localStorage.setItem('reserva',JSON.stringify(arr))
}

formFecha.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newReg= new Reserva(fechaIngreso.value, fechaSalida.value, horario.value, email.value);
    guardarReserva(newReg)
    guardarEnLS(reservas)
})