//////////////// MAP() ////////////////
// IMPORTANTE: El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la "función callback" en cada elemento. Esto lo hace sin mutar el arreglo original.

/*
// Una "función de callback" es una función que se pasa a otra función como un argumento.

const frutas = ["🍌", "🍏", "🍓"];

// Para recorrer el array "frutas", creo una nueva variable llamada "nuevoArray", porque el "map" devuelve un nuevo Array y debe ser alojada en una nueva variable. Además, el array original no se modifica (no se muta). "SOLO SE RECORRE"
const nuevoArray = frutas.map((fruta) => fruta);

console.log(nuevoArray);
*/

//-------------------------------------------------//
/*
const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const names = users.map((user) => user.name);

console.log(names);
*/
//-------------------------------------------------//

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPorDos = numeros.map((num) => num * 2);

console.log(numerosPorDos);
*/
/////////////////////////////////////////////////////

//////////////// FILTER() ////////////////
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

/*
const users = [
  { uid: 1, name: "John", age: 34 },
  { uid: 2, name: "Amy", age: 40 },
  { uid: 3, name: "CamperCat", age: 10 },
];

// EN ESTE EJEMPLO, DEVUELVO POR CONDICIÓN.
const mayores = users.filter((user) => user.age > 30); // En este caso, solo va a retornar a los usuarios mayores de 30.
console.log(mayores);
*/

/*
// EN ESTE EJEMPLO VOY A DEVOLVER UN NUEVO ARRAY CON UN USUARIO ELIMINADO:
const userFiltrado = users.filter((user) => user.uid !== 3);
console.log(userFiltrado);
*/
/////////////////////////////////////////////////////

/*
//////////////// FIND() ////////////////
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const users = [
  { uid: 1, name: "John", age: 34 },
  { uid: 2, name: "Amy", age: 40 },
  { uid: 3, name: "CamperCat", age: 10 },
];

const amy = users.find((user) => user.uid === 2);
console.log(amy);
/////////////////////////////////////////////////////
*/

/*
//////////////// SOME() ////////////////
// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
const users = [
  { uid: 1, name: "John", age: 34 },
  { uid: 2, name: "Amy", age: 40 },
  { uid: 3, name: "CamperCat", age: 10 },
];

const existe = users.some((user) => user.uid === 2); // En este caso, devuelve TRUE porque existe el "uid o id" con el valor 2 dentro del array de objetos. Si el ejemplo hubiera sido: "user.uid === 4", hubiese devuelto FALSE porque no hay ningún objeto con el "uid: 4"
console.log(existe);
/////////////////////////////////////////////////////
*/

/*
//////////////// findIndex() ////////////////
// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
const users = [
  { uid: 1, name: "John", age: 34 },
  { uid: 2, name: "Amy", age: 40 },
  { uid: 3, name: "CamperCat", age: 10 },
];

const indice = users.findIndex((user) => user.uid === 2); // Devuelve "1", porque es el índice del segundo objeto. En cambio, si pondría la condición "user.uid === 4", me devolvería "-1", ya que no existe el objeto con el "uid: 4".
console.log(indice);
/////////////////////////////////////////////////////
*/

/*
//////////////// slice() ////////////////
// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3

const arrayNuevo = arr.slice(1, 3); // El índice '1' es el INICIO y el índice '3' es el FIN. Pero como el FIN NO SE INCLUYE, solamente devuelve los valores que se encuentran en los índices "1 y 2". En este caso, el valor de índice 1 es: "Dog", y el valor del índice 2 es: "Tiger".

console.log(arrayNuevo);
/////////////////////////////////////////////////////
*/

/*
//////////////// concat() ////////////////
// El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

// const array3 = array1.concat(array2);
console.log(array3);
/////////////////////////////////////////////////////
*/

/*
//////////////// SPREAD OPERATOR ////////////////
// El SPREAD OPERATOR: Permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados.
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = [...array1, ...array2];

// const array3 = [...array1, "-", ...array2];
// En este caso, a ambos arrays, puedo unirles lo que quiera (array, string, char, entero, etc). Por ejemplo, le uní un char: "-"

console.log(array3);
/////////////////////////////////////////////////////
*/

//////////////// reduce() ////////////////
// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
/*
const numeros = [1, 2, 3, 4, 5];

const sumarTodos = numeros.reduce((acum, valorActual) => acum + valorActual);

console.log(sumarTodos);
*/

/*
const arrayNumeros = [
  [0, 1],
  [2, 3],
  [4, 5],
];
*/

/*
// 1° forma) La primer forma, lo hago con el método "reduce()":
const soloNumeros = arrayNumeros.reduce((acum, current) =>
  // "current", significa ACTUAL
  acum.concat(current)
);

console.log(soloNumeros);
// DEVUELVE EN CONSOLA: [0, 1, 2, 3, 4, 5]
*/

/*
// 2° forma) La segunda forma, lo hago con SPREAD OPERATOR:
const arrayPlano = [].concat(...arrayNumeros);
// lo que hago es concatenar un ARRAY VACÍO con el SPREAD OPERATOR del "arrayNumeros".
console.log(arrayPlano);
*/

/*
// 3° forma) La tercer forma, lo hago con el método "flat()", pero todavía está en experimento:
const arrayPlano = arrayNumeros.flat();
console.log(arrayPlano);
/////////////////////////////////////////////////////
*/

/*
//////////////// split() ////////////////
// El método split() divide un objeto de tipo String en un array, mediante un separador.
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(","); // Dentro de split(), pongo "," para que separe mediante COMAS todo el string en diferentes strings con sus respectivos índices.
console.log(arrayMeses);
/////////////////////////////////////////////////////
*/

//////////////// join() ////////////////
// el método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const nuevoTexto = arrayMeses.join("-"); // Dentro de join(), pongo "-" para que separe mediante GUIONES todo el string en diferentes strings. Si no le pongo ningún separador (en este caso, el "-"), lo separa automáticamente por una ",".

console.log(nuevoTexto);
// Separador: Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (",").
/////////////////////////////////////////////////////
