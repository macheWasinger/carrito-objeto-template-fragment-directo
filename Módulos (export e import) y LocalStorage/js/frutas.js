/*
////////// IIFE //////////
// Sirve para ejecutar varios archivos al mismo tiempo.

// FUNCIÓN DE FLECHA ANÓNIMA. Es una función AUTOEJECUTABLE:
(() => {
  const fruta = "banana 🍌";
  console.log(fruta);
})();
// La DESVENTAJA es que no puedo sacar sus variables para usarlos en otros archivos.
*/

///////////// EXPORT e IMPORT /////////////
// Puedes exportar funciones, var, let, const y, como veremos más adelante clases. Deben ser elementos de nivel superior; no puedes usar export dentro de una función, por ejemplo. Esto se conoce como exportaciones con nombre.

// IMPORTANTE: el "export default", solo exporta una sola vez por archivo y, para poder importarlo desde el archivo "app.js", no hace falta colocar las llaves {}
export default function pintarPlatano() {
  console.log("Platano 🍌"); // Va a imprimir el platano. Así que, en el archivo "app.js", solo tengo que importarla e invocarla.
}

const sandia = "Sandia 🍉";

// Exporto una ARROW FUNCTION
const frutilla = () => {
  console.log("Frutilla 🍓");
};

// Exporto una clase.
class Fruta {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// IMPORTANTE: puedo EXPORTAR todos los archivos juntos mediante un solo EXPORT para no tener que andar escribiendo "export" en cada cosa que quiera exportar. Por ejemplo:
export { sandia, frutilla, Fruta };

//////////////////////////////////////////
