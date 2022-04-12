///////////// EJERCICIOS - PRÁCTICA /////////////

////////////////////////////////////////
// EJERCICIO 1
// 1) Al cargarse el archivo JavaScript, se muestra un mensaje
// alert("Hola mundo!");

// 2) Despues del primer mensaje, se muestra otro mensaje seguido
// alert("Soy el primer script");
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 2
// 1 y 2)
// UNA FORMA:
// const mensaje =
//   "Hola Mundo! \n Qué fácil es incluir 'comillas simples' \n y \"comillas dobles\"";

// OTRA FORMA:
const mensaje = `Hola Mundo!
Qué fácil es incluir 'comillas simples' 
y "comillas dobles"
`;

alert(mensaje);
*/
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 3
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

// Si se fijan la sentencia "for in" muestra el indice y la propiedad en sí, y la sentencia "for of" muestra los valores de una colección. En este caso, los meses.

for (let mes of meses) {
  console.log(mes);
}
*/
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 4
var valores = [true, 5, false, "hola", "adios", 2];

// 1)
if (valores[3].length > valores[4].length) {
  console.log(
    `"${valores[3]}" es mayor porque tiene ${valores[3].length} caracteres y "${valores[4]}" tiene ${valores[4].length} caracteres.`
  );
} else {
  console.log(
    `"${valores[4]}" es mayor porque tiene ${valores[4].length} caracteres y "${valores[3]}" tiene ${valores[3].length} caracteres.`
  );
}

// 3)
let num1 = valores[1];
let num2 = valores[5];

// SUMA
let suma = num1 + num2;
console.log(num1 + " + " + num2 + " = " + suma);

// RESTA
let resta = num1 - num2;
console.log(num1 + " - " + num2 + " = " + resta);

// MULTIPLICACIÓN
let multiplicacion = num1 * num2;
console.log(`${num1} * ${num2} = ${multiplicacion}`);

// DIVISIÓN
let division = num1 / num2;
console.log(`${num1} / ${num2} = ${division}`);

// MÓDULO (RESTO de la división)
let modulo = num1 % num2;
console.log(`${num1} % ${num2} = ${modulo}`);
*/
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 5
var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
  console.log("numero1 no es mayor que numero2");
}

if (numero2 >= 0) {
  console.log("numero2 es positivo");
}

if (numero1 < 0 || numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}

if (++numero1 < numero2) {
  console.log(
    "Incrementar en 1 unidad el valor de numero 1 no lo hace mayor o igual que numero2"
  );
}
*/
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 6

var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

// 1)
let dni = prompt("Ingrese su número de DNI: ");

let letra = prompt("Ingrese la letra de su DNI (en mayúsculas)");
letra = letra.toUpperCase();

// 2)
if (dni < 0 || dni > 99999999) {
  alert("El número proporcionado no es válido!");
} else {
  const letraDNI = dni % 23;
  if (letra != letras[letraDNI]) {
    alert("La letra o el número proporcionados no son correctos!");
  } else {
    alert("El número y la letra de DNI son correctos!");
  }
}
*/
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 7
const num = prompt("Ingrese un número entero: ");

let resultado = 1;

for (let i = 1; i <= num; i++) {
  resultado = resultado * i;
  console.log("resultado: " + resultado);
}

alert(`El factorial de ${num} es ${resultado}`);
*/
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 8
let num = prompt("Ingrese un número entero: ");

let resultado = parImpar(num);
alert(`El número ${num} es ${resultado}`);

function parImpar(num) {
  if (num % 2 === 0) {
    return "PAR";
  } else {
    return "IMPAR";
  }
}
*/
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 9
let cadena = prompt("Ingrese una frase o palabra: ");

function texto(cad) {
  let resultado = `La cadena ${cadena} `;

  if (cad === cad.toUpperCase()) {
    resultado = resultado + `está formada por letras MAYÚSCULAS.`;
  } else if (cad === cad.toLowerCase()) {
    resultado = resultado + `está formada por letras minúsculas.`;
  } else {
    resultado = resultado + `está formada por letras mayúsculas y minúsculas.`;
  }
  return resultado;
}

alert(texto(cadena));
*/
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 16
const lista = document.querySelector("#lista");
const agregar = document.querySelector("#id-button");

agregar.addEventListener("click", () => {
  const newLi = document.createElement("LI");
  newLi.textContent = "Racing";
  lista.appendChild(newLi);
});
*/
////////////////////////////////////////

////////////////////////////////////////
/*
// EJERCICIO 17
const article = document.querySelector("#id-article");

const arrayParrafos = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ducimus veritatis expedita corporis modi, cumque harum reiciendis id illo deserunt fugiat quos? Animi, quidem culpa! Ratione nihil sed eos sint.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ducimus veritatis expedita corporis modi, cumque harum reiciendis id illo deserunt fugiat quos? Animi, quidem culpa! Ratione nihil sed eos sint.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ducimus veritatis expedita corporis modi, cumque harum reiciendis id illo deserunt fugiat quos? Animi, quidem culpa! Ratione nihil sed eos sint.",
];

for (let parrafo of arrayParrafos) {
  const texto = document.createElement("P");
  texto.textContent = parrafo;
  article.appendChild(texto);

  const hideButton = document.createElement("button");
  hideButton.textContent = "Ocultar contenido";
  article.appendChild(hideButton);

  const showButton = document.createElement("button");
  showButton.textContent = "Ver contenido";
  showButton.style.display = "none";
  article.appendChild(showButton);

  hideButton.addEventListener("click", () => {
    texto.style.display = "none";
    hideButton.style.display = "none";
    showButton.style.display = "block";
    // texto.style.fontSize = 0;
  });

  showButton.addEventListener("click", () => {
    texto.style.display = "block";
    hideButton.style.display = "block";
    showButton.style.display = "none";
  });
}
*/

/*
function ocultar() {
  document.getElementById("id-p").style.display = "none";

  document.getElementById("botonOcultar").style.display = "none";

  document.getElementById("botonVer").style.display = "block";
}

function mostrar() {
  document.getElementById("id-p").style.display = "block";

  document.getElementById("botonVer").style.display = "none";

  document.getElementById("botonOcultar").style.display = "block";
}
*/
////////////////////////////////////////

////////////////////////////////////////
// EJERCICIO 21
const nombre = document.querySelector("#name");
const apellido = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const comentarios = document.querySelector("#comentarios");

const form = document.querySelector("#form");

const parrafo = document.querySelector("#warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let entrar = false;
  let warnings = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (nombre.value.length === 0) {
    warnings += `El campo NOMBRE no puede estar vacío. \n`;
    entrar = true;
  } else if (nombre.value.length < 6) {
    warnings += `El nombre no es válido! \n`;
    entrar = true;
  }

  if (apellido.value.length === 0) {
    warnings += `El campo APELLIDO no puede estar vacío. \n`;
    entrar = true;
  } else if (apellido.value.length < 6) {
    warnings += `El apellido no es válido! \n`;
    entrar = true;
  }

  if (!regexEmail.test(email.value)) {
    warnings += `El email no es válido! \n`;
    entrar = true;
  }

  if (password.value.length < 6) {
    warnings += `La contraseña no es válida!`;
  }

  if (comentarios.value.length > 50) {
    warnings += `El comentario no es válido! \n`;
  }

  if (entrar) {
    alert(warnings);
  }
});
////////////////////////////////////////
