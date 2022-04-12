const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
// Creo el FRAGMENT para evitar el REFLOW.

const btnesBotones = document.querySelectorAll(".card .btn"); // Pongo "querySelectorAll" porque son varios botones y los vamos a buscar dentro de la clase ".card"

const carritoObjeto = []; // Este es un ARRAY VACÍO y lo uso más adelante para guardar la cantidad de OBJETOS frutas AGREGADAS.

const agregarAlCarrito = (e) => {
  console.log(e.target.dataset.fruta); // Con el "dataset", devuelvo el valor del "data-fruta" que cree en las etiquetas del HTML.

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  const indice = carritoObjeto.findIndex((item) => item.id === producto.id); // El "findIndex", lo que hace es devolver -1 si el array está vacío.

  console.log(indice);

  if (indice === -1) {
    carritoObjeto.push(producto); // El elemento se va a empujar una sola vez dentro del array "carritoObjeto" y van a tener los indices (0, 1, 2) porque son 3 elementos.
  } else {
    carritoObjeto[indice].cantidad++; // En el caso que exista un elemento, solo le aumento la cantidad de sí mismo mediante ".cantidad++" cada vez que el cliente haga CLICK en agregar dicho producto (frutilla, banana o manzana).
  }

  console.log(carritoObjeto);

  pintarCarrito(carritoObjeto);

  //   console.log(carritoObjeto);
};

const pintarCarrito = (array) => {
  // Como al hacer click en cada botón AGREGAR de cada fruta, el forEach se repite y pinta en pantalla a todos los textos de las frutas, agrego el siguiente comando para solucionar dicho problema:
  carrito.textContent = ""; // El contenido del texto va a iniciar vacío para que no se repitan los textos "frutilla, banana y manzana", cada vez que hago click en el botón "agregar" de cada fruta nombrada.

  // "Object.values(carritoObjeto).forEach((item) => {}", sirve para transformar un OBJETO en un ARRAY. Pero ya no lo voy a usar porque voy a recorrer el "array" que le paso como parámetro a la arrow function "pintarCarrito".
  array.forEach((item) => {
    // EL "forEach" ITERA EN ARRAYS Y NO EN OBJETOS.
    // Para no cometer errores, uso el ".firstElementChild" que retorna el primer hijo del objeto Element, o bien null si no existen elementos hijos.
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clone); // La variable "clone" la agrego al fragment para evitar el "reflow".
  });

  carrito.appendChild(fragment);
};

btnesBotones.forEach((btn) => {
  btn.addEventListener("click", agregarAlCarrito);
});

/************ EJEMPLO "BURBUJEO" ************/
/*
El BURBUJEO y la captura de eventos son dos mecanismos que describen lo que sucede cuando dos controladores del mismo tipo de evento se activan en un elemento. Eso quiere decir que cuando haga click en el elemento NIETO, va a tomar también el evento click del elemento HIJO y el del PADRE. Y si hago click en el elemento HIJO, va a activar también el evento del elemento PADRE. O sea, hace un efecto cadena hacia arriba porque están anidados.
*/

// Esta es una forma NO recomendada de hacerlo:
/*const primary = document.querySelector(".border-primary");
const secondary = document.querySelector(".border-secondary");
const danger = document.querySelector(".border-danger");

primary.addEventListener("click", (e) => console.log("hice click PADRE"));
secondary.addEventListener("click", (e) => console.log("hice click HIJO"));
danger.addEventListener("click", (e) => console.log("hice click NIETO"));
*/

/*
// Con esta forma, EVITO el BURBUJEO:
const cajitas = document.querySelectorAll(".border");

cajitas.forEach((caja) => {
  caja.addEventListener("click", (e) => {
    e.stopPropagation(); // Sirve para EVITAR el BURBUJEO.

    console.log("Me diste click!");
  });
});
*/
/********************************************/

/*---------- EJEMPLO "preventDefault" ----------*/
/*
const ancla = document.querySelector("a");
ancla.addEventListener("click", (e) => {
  console.log("Me diste CLICK");
  e.preventDefault(); // El preventDefault(), sirve para EVITAR que la página web se actualice por defecto cada vez que hago click. En este caso, al evitar el comportamiento por defecto, el ANCLA no puede enviar el valor del "href" a la URL, ya que le página web nunca se actualiza y queda estática.
});
*/
/*----------------------------------------*/
