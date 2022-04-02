// VALOR POR REFERENCIA
/*
//  'b' es REFERENCIA de 'a'
const a = "hola";
const b = a;

console.log(b);
*/

/*
//  'b' es REFERENCIA de 'a'
let a = ["hola"];
let b = a;

a.push("chao");

console.log(b);
*/

let a = { nombre: "hola" };
let b = a;

a.nombre = "chao";

console.log(b);
