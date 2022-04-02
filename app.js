/*
 // Dentro del "console.log", hay emojis. 
console.log("😍🤣😂😁😘👌😁👍");

console.log(document);

console.log(document.title);

console.log(document.head);
*/

/*
console.log(document.getElementById("tituloWeb").innerHTML); // SACA AL TEXTO DE LA ETIQUETA "h1" Y LO IMPRIME EN CONSOLA.
*/

/* ES UNA ALTERNATIVA
// Ahí se le dice que primero cargue el "DOM" y después ejecute la "ARROW FUNCTION".
document.addEventListener("DOMContentLoaded", () => {
  console.log(document.getElementById("tituloWeb"));

  console.log(document.getElementById("tituloWeb").textContent); // SACA AL TEXTO DE LA ETIQUETA "h1" Y LO IMPRIME EN CONSOLA.
});
*/

/*
console.log(document.getElementById("tituloWeb"));

//Con el "querySelector", obtengo el selectór ". o #"
console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("#tituloWeb"));
console.log(document.querySelector("h1"));
// Son distintas maneras, pero llegan al mismo resultado.

// Si queremos seleccionar todas las clases con el mismo nombre, hay que usar el "querySelectorAll". También, podemos seleccionar "etiquetas", "id", "nodos (o sea, una clase dentro de una otra, estan anidados)", etc.
console.log(document.querySelectorAll(".text-danger"));

// Si quiero seleccionar todas las clases iguales que se encuentran dentro del "container", lo hago de la siguiente manera:
console.log(document.querySelectorAll(".container .text-danger")); // Es muy similar a la forma de hacerlo en CSS: ".container .text-danger"
*/

const h1 = document.getElementById("tituloWeb");
const boton = document.querySelector(".btn-primary");

h1.textContent = "nuevo texto desde js"; // Renderiza el texto en pantalla y también lo imprime en consola.

// h1.style.backgroundColor = "red";
// h1.style.color = "white";

//////////// EVENTOS ////////////
// Ejemplo: target.addEventListener(tipo, listener)
// target: es la etiqueta o elemento al cual queremos aplicarle el evento.
// tipo: Pueden ser "submit, hover, click", etc.
// listener: Acepta una función.

boton.addEventListener("click", () => {
  console.log("me diste click");
  h1.textContent = "texto desde js";
  h1.style.color = "red";
});

console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);
