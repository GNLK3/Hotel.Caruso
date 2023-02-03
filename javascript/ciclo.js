/* Formulario de Reservas */

const formFecha = document.querySelector("#formFec");
const habSel = document.querySelector("#sel1");
const fechaIngreso = document.querySelector("#fechaIn");
const fechaSalida = document.querySelector("#fechaOut");
const email = document.querySelector("#email");

let reservas;

if (localStorage.getItem("reservas")) {
    reservas = JSON.parse(localStorage.getItem("reservas"));
} else {
    reservas = [];
}

class Reserva {
    constructor(habSel, fechaIngreso, fechaSalida, email, costoTotal) {
        this.habSeleccionada = habSel;
        this.fechaDeIngreso = fechaIngreso;
        this.fechaDeSalida = fechaSalida;
        this.email = email;
        this.costoTotal = costoTotal;
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

    if (!habSel.value || !fechaIngreso.value || !fechaSalida.value || !email.value) {
        Swal.fire({
            title: "Error",
            text: "Por favor completa todo el formulario",
            icon: "error",
        });
        return;
    }

    const fechIngreso = new Date(fechaIngreso.value);
    const fechSalida = new Date(fechaSalida.value);
    if (fechIngreso >= fechSalida) {
        Swal.fire({
            title: "Error",
            text: "La fecha de salida debe ser posterior a la fecha de ingreso",
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

    const newReg = new Reserva(habSel.value, fechaIngreso.value, fechaSalida.value, email.value, costoTotal);
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
                "En breve lo vamos a redireccionar a nuestro sitio de pagos.",
                `El costo de su reserva es de $${costoTotal}.`,
                "info",
            );
            setTimeout(() => {
                window.location.href = "https://www.mercadopago.com.ar/";
                }, 4000);
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

registrar.addEventListener("click", () => {
    Swal.fire(
        "Reserva Confirmada!",
        "Gracias por elegirnos",
        "success",
    );
});

document.getElementById("clean").addEventListener("click", function() {
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
        document.getElementById("formFec").reset();
        Swal.fire(
          'Datos eliminados',
          '',
          'success'
        )
      }
    })
  });
  
  