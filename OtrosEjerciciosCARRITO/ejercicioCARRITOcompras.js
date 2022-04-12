const frutas = [];

const fruta = prompt("Feria Market: ¿qué fruta desea comprar?");

frutas.push(fruta);

/* La función "confirm" muestra una ventana modal con una pregunta y dos botones: OK/ACEPTAR y CANCELAR.
  El resultado es "true" si se pulsa OK/ACEPTAR y "false" en caso contrario. */
while (confirm("¿Desea agregar otra fruta al carrito?")) {
  /* Mientras la función "confirm" devuelva "true", se va a ejecutar el "while" y va a aparecer la ventana modal con la pregunta: "¿Desea agregar otra fruta al carrito?". */

  const fruta = prompt("¿qué fruta desea comprar?");
  /* Esta variable llamada "fruta", al estar dentro del "scope" del ciclo "while", es diferente de la variable global "fruta" que se encuentra en la linea 3. */

  frutas.push(fruta);
}

console.log("Compraste: ");
////// for of //////
// for (const fruta of frutas) {
//   console.log(fruta);
// }

////// forEach //////
frutas.forEach((fruta) => console.log(fruta));
