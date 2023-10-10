let entrada = prompt("Ingrese nombre del usuario");

while(entrada != "Usuario"){
    alert("Usuario Incorrecto");

    entrada = prompt("Ingrese el usuario");

}

    alert("¡Bienvenido Sr/Sra Usuario!");

let opcion = prompt(`
Ingrese porfavor la opcion solicitada
1. Calzado
2. Vestimenta Unisex
`);

switch (opcion){
    case "1":
        alert("Usted eligio la opcion de calzado, tenemos zapatillas, zapatos, chanclas y pantuflas");
        break;

        case "2":
            alert("Usted eligio la opcion de Ropa Unisex, tenemos remerones, jeans mom, chupines, camperones y joggins")
            break;

            default:
                alert("Opcion Incorrecta")
                break;
}

for(let turno = 1; turno <= 3; turno++){
    let nombre = prompt("Introduzca su nombre y apellido completo");

    alert(`Su pedido paso a estar en el puesto #${turno} de la fila Sr/Sra: ${nombre}`);
}

alert("La página está saturada por mucha cantidad de pedidos, intente mas tarde");