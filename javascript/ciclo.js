/* Formulario de Reservas */

const formFecha = document.querySelector("#formFec")
    habSel = document.querySelector("#sel1")
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
    constructor(habSel, fechaIngreso, fechaSalida, horario, email) {
        this.habSeleccionada = habSel;
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
    const newReg= new Reserva(habSel.value, fechaIngreso.value, fechaSalida.value, horario.value, email.value);
    guardarReserva(newReg)
    guardarEnLS(reservas)
})

registrar.addEventListener("click",()=>{
    Swal.fire(
        'Reservar Registrada!',
        'Gracias por elegirnos',
        'success'
      )
})

clean.addEventListener("click",()=>{
    Swal.fire({
        title: 'Desea limpiar el formulario?',
        text: "Los datos ingresados seran borrados",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Datos eliminados',
            '',
            'success'
          )
        }
      })
})