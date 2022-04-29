/*
////////// IIFE //////////
// Sirve para ejecutar varios archivos al mismo tiempo.

// Declaro una FUNCIÓN ANÓNIMA que se va a ejecutar apenas se lea en el código. Por eso, es una FUNCIÓN AUTOEJECUTABLE:
(function () {
  const fruta = "sandía 🍉";
  console.log(fruta);
})();
// La DESVENTAJA es que no puedo sacar sus variables para usarlos en otros archivos.
*/

///////////// EXPORT e IMPORT /////////////
// importo la variable "sandia", la función "frutilla() y la clase "Fruta" desde el archivo "frutas.js"
import { sandia, frutilla as fresa, Fruta } from "./frutas.js";
// También, puedo cambiarle el nombre a la función importada e invocarlo con el nuevo nombre. En este caso, la función importada se llama "frutilla" y, gracias al "as", puedo indicarle el nuevo nombre. Ejemplo: "frutilla as fresa" . Por lo tanto, para poder imprimir el valor de la función frutilla, tengo invocarla con el nuevo nombre "fresa()".

// IMPORTANTE: al exportar por defecto (export default), para poder importar la función "pintarPlatano()", no hace falta poner las llaves {}
import pintarPlatano from "./frutas.js";

// TAMBIÉN, LA FUNCIÓN "pintarPlatano()", SE PUEDE IMPORTAR DE FORMA PARTICULAR:
// import { pintarPlatano } from "./frutas.js";

// También se pueden importar todos los archivos a la misma vez:
// import pintarPlatano, { sandia, frutilla, Fruta } from "./frutas.js";

console.log(sandia); // Imprimo la variable importada

pintarPlatano(); // Invoco a la función importada y se va a imprimir porque el "console.log" lo ejecuté dentro del archivo (frutas.js) en donde fue creada.

// Nuevo nombre de la función "frutilla()". Se lo modifiqué dentro del "import" gracias al "as".
fresa();

const cereza = new Fruta("Cereza 🍒");
console.log(cereza);
//////////////////////////////////////////
