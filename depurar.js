// "hazme una funcion para el sitio web de electricosque reciba la cantidad de servicios que un cliente que quiere reservar y me diga si puede reservar o no. La regla es que no se puede reservar mas de 2 servicios por persona".

function puedeReservar(cantidad) {
    if (cantidad > 2) {
        return false;
    }
    return true;
}
