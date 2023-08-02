// let numero = parseInt(prompt("digite un numero"));
// let segundo_numero = parseInt(prompt("digite el segundo numero"));
// numero -= segundo_numero;

// alert("tu resultado es " + numero);

// let UsuarioIngresado = prompt("Ingrese su usuario: ");
// let contraseñaIngresada = prompt("Ingrese su contraseña: ");
// let UsuarioValido = "RRodriguez";
// let ContraseñaValida = "Rrr34567";
// if (
//   UsuarioIngresado === UsuarioValido &&
//   contraseñaIngresada === ContraseñaValida
// ) {
//   alert("Inicio de sesion exitoso ¡Bienvenido!");
// } else {
//   alert("Credenciales incorrectas. Vuelve a intertarlo.");
// }

//si la ingresos es de 13 a 15 decir que ganaste el año
//si la ingresos es de 9 a 12 decir casi no pasas, pero lo lograste
// 6 a 10 quedaste reforzando
// menos de 6 decir a que haz venido, vago

let nota = 12;

if (nota >= 13 && nota <= 15) {
  console.log("Ganaste el año campeón");
} else if (nota >= 9 && nota <= 12) {
  console.log("Casi no pasas, pero lo lograste");
} else if (nota >= 6 && nota <= 10) {
  console.log("Quedaste reforzando");
} else if (nota < 6) {
  console.log("¿A qué has venido, vago?");
} else {
  console.log("Nota inválida");
}

//si los ingresos anuales son mayor o igual a 1000000 esta exento del impuesto
// si son menores a 400000 los impuestos son bajos
// si son de 800000 los impuestos son medios
// sino estan altos

let ingresos = 100000;

if (ingresos >= 1000000) {
  console.log("Estás exento del impuesto");
} else if (ingresos < 400000) {
  console.log("Los impuestos son bajos");
} else if (ingresos >= 400000 && ingresos < 800000) {
  console.log("Los impuestos son medios");
} else {
  console.log("Los impuestos están altos");
}

let dia = parseInt(prompt("Ingresa tu día de nacimiento:"));
let mes = parseInt(prompt("Ingresa tu mes de nacimiento:"));

if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 18)) {
  document.write("Eres Acuario");
} else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
  document.write("Eres Piscis");
} else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
  document.write("Eres Aries");
} else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
  document.write("Eres Tauro");
} else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
  document.write("Eres Géminis");
} else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
  document.write("Eres Cáncer");
} else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
  document.write("Eres Leo");
} else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
  document.write("Eres Virgo");
} else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
  document.write("Eres Libra");
} else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
  document.write("Eres Escorpio");
} else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
  document.write("Eres Sagitario");
} else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
  document.write("Eres Capricornio");
} else {
  document.write("fecha invalida");
}

//coche y moto, puedes conducir
//bici puedes montarla
// sino te toco manejar

let tipo_vehiculo = prompt(
  "1 para carro. 2 para moto. 3 para bicicleta. 4 para ninguno"
);

switch (tipo_vehiculo) {
  case "1":
    console.log("Tienes carro, pudes manejarlo");
    break;
  case "2":
    console.log("Tienes moto, pudes manejarla");
    break;
  case "3":
    console.log("Tienes bicicleta, pudes montarla");
    break;
  case "4":
    console.log("No tienes nada, te toca caminar");
    break;
  default:
    console.log("No se encuentra el vehículo");
}

let prenda = prompt(
  "1 para camiseta. 2 para pantalon. 3 para zapatos. 4 para medias"
);

switch (prenda) {
  case "1":
    let camiseta = 15;
    let total_camiseta = (camiseta * 5) / 100;
    console.log(
      "El precio de la camiseta es de " +
        camiseta +
        "dolares, con un descuento del 5% el total seria de " +
        total_camiseta
    );
    break;
  case "2":
    let pantalon = 20;
    let total_pantalon = (pantalon * 10) / 100;
    console.log(
      "El precio del pantalon es de " +
        pantalon +
        "dolares, con un descuento del 10% el total seria de " +
        total_pantalon
    );
    break;
  case "3":
    let zapatos = 30;
    let total_zapatos = (zapatos * 15) / 100;
    console.log(
      "El precio del zapatos es de " +
        zapatos +
        "dolares, con un descuento del 15% el total seria de " +
        total_zapatos
    );
    break;
  case "4":
    let medias = 5;
    let total_medias = (medias * 2) / 100;
    console.log(
      "El precio del medias es de " +
        medias +
        "dolares, con un descuento del 2% el total seria de " +
        total_medias
    );
    break;
  default:
    console.log("No se encuentra el producto");
}

let lados = prompt("cuantos lados tiene tu figura??");

switch (lados) {
  case "3":
    console.log("tu figura es un triangulo");
    break;
  case "4":
    console.log("tu figura es un cuadrado o un rectangulo");
    break;
  case "5":
    console.log("tu figura es un pentangono");
    break;
  case "6":
    console.log("tu figura es un hexagono");
    break;
  case "7":
    console.log("tu figura es un heptagono");
    break;
  case "8":
    console.log("tu figura es un octagono");
    break;
  default:
    console.log("lados invalidos");
}
