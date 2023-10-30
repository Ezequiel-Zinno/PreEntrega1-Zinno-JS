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

// Segunda Pre-entrega

     // Funciones matemáticas


//     function operacionesMtematicas(){
//         let numero1 = parseFloat(prompt("Ingrese un número"));

//         let operacion = prompt("Introduce el la operación (+, -, *, /):")

//         let numero2 = parseFloat(prompt("Ingrese otro número"));

//         switch(operacion){
//             case "+":
//                 alert("Resultado: " + (numero1 + numero2));
//                 break;

//             case "-":
//                 alert("Resultado: " + (nuumero1 - numero2));
//                 break;
//             case "*":
//             alert("Resultado: " + (numero1 * numero2));
//             break;

//             case "/":
//                 if(numero2 !==0){
//                     alert("Resultado " + (numero1 / numero2));
//                 } else {
//                     alert("No es posible dividir por cero.");
//                 }
//                 break;
//             default:
//                 alert("Operacion no valida");

// }
// }

//     operacionesMtematicas()
    // !!


    //!! objetos

//     let usuario = {
//         nombre: "Ezequiel",
//         apellido: "Zinno",
//         edad: "21"
// };

// let propiedad = prompt("Ingrese la propiedad que quiere buscar dentro del Array");

// if (!usuario.hasOwnProperty(propiedad)) {
//     alert("Propiedad no encontrada");
// }else{
// alert(usuario[propiedad]);
// }
// !!

//!! arrays  

// let numeros = [1, 2, 3, 4, 5 ,6];
// let index = numeros.indexOf(1);
// console.log(index);

// let existe = numeros.includes(3);
// console.log(existe);

// let filtrado = numeros.filter(numero => numero > 1);
// console.log(filtrado);