/* Formulario de Reservas */

const formFecha = document.querySelector("#formFec");
const habSel = document.querySelector("#sel1");
const fechaIngreso = document.querySelector("#fechaIn");
const fechaSalida = document.querySelector("#fechaOut");
const horario = document.querySelector("#hora");
const email = document.querySelector("#email");

let reservas;

if (localStorage.getItem("reservas")) {
    reservas = JSON.parse(localStorage.getItem("reservas"));
} else {
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

function guardarReserva(reserva) {
    return reservas.push(reserva);
}

function guardarEnLS(arr) {
    return localStorage.setItem("reservas", JSON.stringify(arr));
}

formFecha.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!habSel.value || !fechaIngreso.value || !fechaSalida.value || !horario.value || !email.value) {
        Swal.fire({
            title: "Error",
            text: "Por favor completa todo el formulario",
            icon: "error",
        });
        return;
    }

    let costoPorNoche;
    switch (habSel.value) {
        case "Standard":
            costoPorNoche = 100;
            break;
        case "Suite":
            costoPorNoche = 200;
            break;
        case "Presidencial":
            costoPorNoche = 300;
            break;
    }

    const fechaIngresoDate = new Date(fechaIngreso.value);
    const fechaSalidaDate = new Date(fechaSalida.value);
    const diasHospedados = (fechaSalidaDate - fechaIngresoDate) / 1000 / 60 / 60 / 24;
    const costoTotal = costoPorNoche * diasHospedados;

    const newReg = new Reserva(habSel.value, fechaIngreso.value, fechaSalida.value, horario.value, email.value);
    guardarReserva(newReg);
    guardarEnLS(reservas);

    fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newReg),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("La reserva no pudo ser enviada");
            }
            return response.json();
        })
        .then((data) => {
            Swal.fire(
                "Reserva Confirmada!",
                `Gracias por elegirnos. El costo de la habitación seleccionada es de $${costo}.`,
                "success",
            );
        })
        .catch((error) => {
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: "error",
            });
        });
});

const registrar = document.getElementById("registrar");
const limpia = document.getElementById("limpia");

registrar.addEventListener("click", () => {
    Swal.fire(
        "Reserva Confirmada!",
        "Gracias por elegirnos",
        "success",
    );
});

clean.addEventListener("click",()=>{
    Swal.fire({
        title: 'Desea limpiar el formulario?',
        text: "Sus datos seran borrados",
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
