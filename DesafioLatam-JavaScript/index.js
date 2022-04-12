///////// If and else /////////
/*
// 1)
const num = prompt("Ingrese un número entero: ");

if (num % 2 == 0) {
  alert(`El número ${num} es PAR`);
} else {
  alert(`El número ${num} es IMPAR`);
}
*/

/*
// 2)
const num = prompt("Ingrese un número entero: ");

if (num % 5 === 0) {
  console.log(`El número ${num} es divible por 5`);
} else {
  console.log(`El número ${num} no es divible por 5`);
}
*/

/*
// 3) popUp
function divisible() {
  const num = prompt("Ingrese un número que sea divisble por 11 y por 5: ");

  let esDivible = true;
  if (num % 11 === 0 && num % 5 === 0) {
    console.log(esDivible);
  } else {
    console.log((esDivisble = false));
  }
  window.open("index.html", "width = 500px, height = 300px");
}
*/

// 5)
/*
const cadena = prompt("Ingrese un texto: ");

let caracter = cadena.split("");

let abecedario = "abcdefghijklmnñopqrstuvwxyz";

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let letra of abecedario) {
  if (caracter[0] === letra) {
    alert(`La palabra "${cadena}" empieza con una letra.`);
  }
}

for (let num of numeros) {
  if (parseInt(caracter[0]) === num) {
    alert(`La palabra "${cadena}" empieza con un número. `);
  }
}
*/

/*
// 8)
const cadena = prompt("Ingrese una palabra: ");
const firstLetraCadena = cadena.split("");

const textoMayus = cadena.toUpperCase();
const firstLetraMayus = textoMayus.split("");

if (firstLetraCadena[0] === firstLetraMayus[0]) {
  alert(`La palabra "${cadena}" empieza con mayúscula.`);
} else {
  alert(`La palabra "${cadena}" no empienza con mayúscula.`);
}
*/

/*
// 11)
const edad = prompt("Ingrese su edad: ");
if (edad <= 13) {
  console.log("Es niño");
} else if (edad > 13 && edad <= 18) {
  console.log("Es adolecente");
} else if (edad > 18) {
  console.log("No es adolecente");
}
*/

// 12)

////////////////////////////

///////// Loops /////////
/*
// 1)
const n = prompt("Ingrese un numero tope: ");

for (let i = 1; i <= n; i++) {
  let cont = 0;
  cont = cont + i;

  console.log(cont);
}
*/

/*
// 2)
const n = prompt("Ingrese un número tope: ");

for (let i = 1; i <= n; i = i + 2) {
  let cont = 0;

  cont += i;
  console.log(cont);
}
*/

// 3
/*)
const numero = prompt("Ingrese un número tope: ");

for (let n = numero; n > 0; n--) {
  let cont = 0;
  cont += n;
  console.log(cont);
}
*/

/*
// 6
const n = prompt("Ingrese un número entero: ");

const m = prompt("Ingrese otro número entero: ");

let sumaPares = 0;
for (let i = n; i < m; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}

console.log(sumaPares);
*/

/*
// 7)
const num = prompt("Ingrese un número entero: ");

let sumatoria = 0;
for (let n = 1; n <= num; n++) {
  console.log(`n: ${n}`);
  sumatoria += n;

  // sum + n
  // 0 + 1 = 1
  // 1 + 2 = 3
  // 3 + 3 = 6
  // 6 + 4 = 10
  // 10 + 5 = 15

  console.log(sumatoria);
}
*/

/*
// 8)
const num = prompt("Ingrese un número entero: ");

let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial = factorial * i;
}
console.log(factorial);
*/
////////////////////////////

///////// divisores con while (o for) /////////
/*
// 1)
const num = prompt("Ingrese un número entero: ");

let i = 1;

while (i <= num) {
  if (num % i == 0) {
    console.log(`Divisor: ${i}`);
  }
  i++;
}
*/

/*
// 2)
const num = prompt("Ingrese un número primo: ");

let divisor = 0;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisor += 1;
  }
}
if (divisor === 2) {
  alert(`El número ${num} es PRIMO.`);
} else {
  alert(`El número ${num} NO es PRIMO.`);
}
*/

// 3)
/*
const num = prompt("Ingrese un número: ");

let acumulador = 0;
let i = 1;
while (i < num) {
  if (num % i === 0) {
    acumulador += i;
    console.log("i: " + i + "\n acumulador " + acumulador);
  }
  i++;
}
if (num != acumulador) {
  alert(`El número ${num} no es perfecto.`);
} else {
  alert(`El número ${num} es perfecto.`);
}
*/
////////////////////////////

///////// Funciones /////////
/*
// 1)
const numero = prompt("Ingrese un número: ");

function entero(num) {
  return num;
}

console.log(entero(numero));
*/

/*
// 2)
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 15));
*/

/*
// 3)
const num1 = prompt("Ingrese el primer número: ");

const num2 = prompt("Ingrese el segundo número: ");

function suma(n1, n2) {
  let s = parseInt(n1) + parseInt(n2);
  return s;
}

console.log(suma(num1, num2));
*/

/*
// 4)
let resultado = `El número `;
function numEntero(num) {
  if (Number.isInteger(num)) {
    resultado += `${num} es entero.`;
  } else {
    resultado += `${num} no es entero.`;
  }

  return resultado;
}

alert(numEntero(48));
*/

/*
// 5)
function autoejecutable(cad) {
  return cad;
}

alert(autoejecutable("muuu"));
*/

///////// Array /////////
/*
// 1 A)
const array = [1, 2, 3, 4, 5, 6];

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}
*/

/*
// 1 B)
const array = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
*/

/*
// 1 C)
const array = [1, 2, 3, 4, 5, 6];

const newArray = array.forEach((num) => console.log(num));
*/

/*
// 1 D)
const array = [1, 2, 3, 4, 5, 6];

const nuevoArray = array.forEach((num) =>
  console.log(`${num} + 1 = ${num + 1}`)
);
*/

/*
// 1 E)
const array = [1, 2, 3, 4, 5, 6];

const copiaArray = array.map((num) => num + 1);
console.log(copiaArray);
*/

/*
// 1 F)
const array = [1, 2, 3, 4, 5, 6];

let acum = 0;
const nuevoArray = array.forEach((num) => (acum += num));

let promedio = acum / array.length;
console.log(`El promedio de los elementos del array es ${promedio}`);
*/

/*
// 2)
const numeroAlAzar = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let arrayNumeros = [];
for (let i = 0; i < 20; i++) {
  arrayNumeros.push(numeroAlAzar(1, 101));
}

console.log(arrayNumeros);
*/

/*
// 3)
const n = prompt("Ingrese un número: ");

let arrayNumAzar = [];

const numeroAzar = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

for (let i = 0; i < n; i++) {
  arrayNumAzar.push(numeroAzar(1, 101));
}
console.log(arrayNumAzar);
*/

///////// String y arrays /////////
/*
// 1)
const parrafo = prompt("Ingrese un parrafo: ");

const arrayParrafo = parrafo.split(",");

console.log(arrayParrafo);
*/

/*
// 2)
const array = ["river", "boca", "san lorenzo", "racing", "independiente"];

console.log(array.toString());
*/
//////////////////////////////////

///// Unión, intersección y conteo /////
/*
// 1)
const arr1 = ["river", "boca", "san lorenzo", "racing", "independiente"];

const arr2 = [
  "barcelona",
  "independiente",
  "river",
  "atletico madrid",
  "betis",
];

const arr3 = [];
for (const inters1 of arr1) {
  for (const inters2 of arr2) {
    if (inters1 === inters2) {
      arr3.push(inters1);
    }
  }
}
console.log(`La intersecciones entre el arreglo 1 y el 2 son: ${arr3}`);
*/

///////// Arreglos de arreglos /////////
/*
// 1)
function aplanar(array) {
  let a = [].concat(...array);
  return a;
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(aplanar(arr));
*/

/*
// 2)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function dividirArray(array) {
  let arrayTemporal = [];

  for (let i = 0; i < array.length; i += 4) {
    let grupo = array.slice(i, i + 4);
    arrayTemporal.push(grupo);
  }

  return arrayTemporal;
}

console.log(dividirArray(arr));
*/

///////// Funciones y arreglos /////////
/*
// 1)
let arreglo = ["mache", "ema", "peti", "claudia", "pedro", "eugenio"];

function copia(arr) {
  let newArray = arr.map((item) => item);
  console.log(newArray);
}

copia(arreglo);
*/

/*
// 2)
let arrayNumeros = [7, 7, 10, 6];

function promedio(arr) {
  if (arr.length > 0) {
    let acum = 0;
    for (let num of arr) {
      acum += num;
    }
    return acum / arr.length;
  } else {
    return 0;
  }
}

console.log(promedio(arrayNumeros));
*/

/*
// 3)
let arrayNumeros = [7, 7, 10, 8, 9, 6, 8];

function promedioRango(arr) {
  let rango = arr.slice(0, 6);

  let acum = 0;
  for (let i = 0; i < rango.length; i++) {
    acum += rango[i];
  }
  return acum / rango.length;
}

console.log(promedioRango(arrayNumeros));
*/

///////// ## Objetos /////////
/*
// 1 A)
let persona = {
  nombre: "Marcelo",
  edad: 31,
  mayor() {
    if (this.edad >= 18) {
      return `${this.nombre} es mayor de edad.`;
    } else {
      return `${this.nombre} es menor de edad.`;
    }
  },
};

console.log(persona.mayor());
*/

/*
// 1 B)
let nuevoArrayPersonas = [];
function personas(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

let marcelo = new personas("Marcelo", 31);
let eugenio = new personas("Eugenio", 6);
let titan = new personas("Titan", 3);
let pedro = new personas("Pedro", 57);
let claudia = new personas("Claudia", 53);
let clara = new personas("Clara", 9);

nuevoArrayPersonas.push(marcelo);
nuevoArrayPersonas.push(eugenio);
nuevoArrayPersonas.push(titan);
nuevoArrayPersonas.push(pedro);
nuevoArrayPersonas.push(claudia);
nuevoArrayPersonas.push(clara);

console.log(nuevoArrayPersonas);
*/

/*
// 1 C y D)
let arrayObjetos = [
  { nombre: "Marcelo", edad: 31, sexo: "masculino" },
  { nombre: "Emanuel", edad: 31, sexo: "masculino" },
  { nombre: "Claudia", edad: 53, sexo: "femenino" },
];

function edadPromedio(arr) {
  let acumulador = 0;
  let promedio = 0;
  let respuesta = `La edad promedio del grupo de personas es `;
  for (let persona of arr) {
    acumulador += persona.edad;
  }
  promedio = acumulador / arr.length;
  return `${respuesta} ${promedio}`;
}

console.log(edadPromedio(arrayObjetos));
*/

///////// Puntos y líneas /////////
/*
// 1 y 2)
// const x = prompt("Ingrese la coordenada X: ");
// const y = prompt("Ingrese la coordenada Y: ");
function punto(x, y) {
  this.x = x;
  this.y = y;

  let objetoPunto = {
    x: this.x,
    y: this.y,
  };

  return objetoPunto;
}

// console.log(punto(x, y));

// 2)
function recta(punto1, punto2) {
  this.punto1 = punto1;
  this.punto2 = punto2;

  let linea = {
    p1: this.punto1,
    p2: this.punto2,
  };

  return linea;
}

console.log(recta(punto(2, 3)), punto(6, 1));
*/

///////// ## DOM /////////
/*
// 1)
const demo = (document.getElementById("demo").innerHTML = "😁");
*/

///////// Jquery selectores /////////
// 1 A)
const nombre = document.querySelector("#nombre");

nombre.value = "Marcelo";

// 1 B)
const diaFavorito = (document.querySelector("#diaFavorito").value = "Monday");

function diaSelect() {
  let diaSeleccionado = document.querySelector(".diaSeleccionado").value;
  console.log(diaSeleccionado);
}

// 1 C)
const labelFirstName = (document.querySelector("#label-firstName").textContent =
  "Tu nombre:");

/*
////// OTRA FORMA //////
const labelFirstName = document.querySelector("#label-firstName");

labelFirstName.textContent = "Tu nombre:";
*/

// 1 F, H y K)
let firstForm = document.querySelector("#firstForm");
firstForm.setAttribute("name", "personal_info");
const addH1 = document.createElement("H1");
addH1.setAttribute("class", "form");
addH1.textContent = "Entrevista personal";
firstForm.insertAdjacentElement("afterbegin", addH1);

// 1 G, H y K)
let secondForm = document.querySelector("#secondForm");
secondForm.setAttribute("name", "job_info");
const addH2 = document.createElement("H1");
addH2.setAttribute("class", "form");
addH2.textContent = "Entrevista de trabajo";
secondForm.insertAdjacentElement("afterbegin", addH2);

// I)
let inputMale = document.querySelector("#inputMale");
const addTitle = document.createElement("H1");
addTitle.innerHTML = "Gender";
inputMale.insertAdjacentElement("beforebegin", addTitle);

// J)
const lastName = document.querySelector("#lastName");

const labelEmail = document.createElement("LABEL");
labelEmail.innerHTML = `<br> Email: <br>`;
lastName.insertAdjacentElement("beforebegin", labelEmail);

const email = document.createElement("INPUT");
email.setAttribute("type", "email");
labelEmail.insertAdjacentElement("beforebegin", email);

///////// Eventos con Jquery /////////
// 3)
let btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.style.marginTop = "30px";

let mensaje = document.querySelector("#idMensaje");

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();

  mensaje.innerHTML = "¡El formulario fue enviado exitosamente!";
});

//////////////////////////////////
