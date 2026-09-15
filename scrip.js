function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

function puedeReservar(cantidad) {
    return cantidad <= 2;
}

function puedeReservar(serviciosDisponibles) {
    return serviciosDisponibles  > 0;
}

// const botonReservar = document.querySelector("#boton-reservar");

// botonReservar.addEventListener("click", function() {
//     console.log("El usuario hizo clic");
// });

const botonReservar = document.querySelector("#boton-reservar");
const contadorServicio = document.querySelector("#contador-servicio");

botonReservar.addEventListener("click", function() {
    const serviciosActuales = Number(contadorServicio.textContent);

    if (puedeReservar(serviciosActuales)) {
        contadorServicio.textContent = serviciosActuales - 1;
    } else {
        botonReservar.textContent = "Sin cupos";
        botonReservar.disabled = true;
    }
});
