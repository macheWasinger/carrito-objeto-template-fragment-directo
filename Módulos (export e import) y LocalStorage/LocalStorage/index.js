/*
IMPORTANTE: esto se guarda en el navegador que esté usando en el momento (en este caso, Google Chrome), por lo que, si copio el dominio (url) e intento abrirlo en otro navegador (ejemplo, Firefox o un navegador del celular), me lo va abrir, pero no voy a tener los datos que guardé en el navegador Google Chrome.

// El "platano" va a vivir en el almacenamiento del navegador y no en el navegador del celular. Además, por más que cerremos la pestaña o la ventana del navegador, cuando lo vuelvo a abrir va a seguir estando almacenado.
localStorage.setItem("pera", "🍐"); // Para GUARDAR se usa el "setItem". Pero el valor siempre tiene que ser un STRING.

// Para CAPTURAR y OBTENER el platano, lo hago mediante su "key" con el "getItem" de la siguiente manera y lo imprimo en consola:
// const platano = localStorage.getItem("platano");
// console.log(platano);

// Puedo BORRAR el platano mediante el "removeItem" pasandole el KEY "platano":
// localStorage.removeItem("platano");

// Sirve para hacer una limpieza general de lo guardado en el navegador. BORRA todo junto.
// localStorage.clear();

// MAYORMENTE, se hace con un condicional IF preguntando si está almacenado un elemento (fruta) y, si lo está, lo imprimo en consola:
localStorage.setItem("frutilla", "🍓");
if (localStorage.getItem("frutilla")) {
  const frutilla = localStorage.getItem("frutilla");
  console.log(frutilla);
}

if (localStorage.getItem("pera")) {
  const pera = localStorage.getItem("pera");
  console.log(pera);
}
*/

const frutas = [
  {
    nombre: "🍌",
    color: "amarillo",
  },
  {
    nombre: "🍒",
    color: "rojo",
  },
  {
    nombre: "🍏",
    color: "verde",
  },
];

// Como es un array de objetos, para poder almacenarlo en el navegador, lo convierto en un STRING formateado en JSON, gracias al "JSON.stringify()"
localStorage.setItem("frutas", JSON.stringify(frutas));

if (localStorage.getItem("frutas")) {
  // Ahora, para poder CAPTURARLO y OBTENER el array de frutas, lo convierto en un array de objetos:
  const frutasDesdeLocal = JSON.parse(localStorage.getItem("frutas"));

  console.log(frutasDesdeLocal);
}
