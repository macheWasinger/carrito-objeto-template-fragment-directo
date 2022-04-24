const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();
// Creo el FRAGMENT para evitar el REFLOW.

// Esta es una DELEGACIÓN DE EVENTOS porque capturo todo el DOCUMENT.
document.addEventListener("click", (e) => {
  // console.log(e.target.matches(".card .btn-outline-primary"));
  // Desde la clase ".card" del DIV padre, selecciono al button AGREGAR que se encuentra dentro, mediante su clase "btn-outline-primary". Entonces, si hago CLICK en el botón AGREGAR, me devuelve TRUE, en caso contrario, devuelve FALSE.

  if (e.target.matches(".card .btn-outline-primary")) {
    // SI al hacer CLICK en el botón AGREGAR, me devuelve TRUE, llama a la función "agregarAlCarrito(e);"

    agregarAlCarrito(e); // llamo a la función
  }

  // console.log(e.target.matches(".list-group-item .btn-success"));
  // Cuando hago click en el botón AGREGAR de un objeto, me va a devolver TRUE. En cambio, si hago click en cualquier parte, me va a devolver FALSE.

  if (e.target.matches("#carrito .list-group-item .btn-success")) {
    // Si hago CLICK en el botón AGREGAR y me devuelve TRUE, hago lo siguiente:
    btnAumentar(e); // llamo a la arrow function.
  }

  if (e.target.matches("#carrito .list-group-item .btn-danger")) {
    // Si hago CLICK en el botón QUITAR y me devuelve TRUE, hago lo siguiente:
    btnDisminuir(e); // llamo a la arrow function.
  }
});

let carritoObjeto = []; // Este es un ARRAY VACÍO y lo uso más adelante para guardar la cantidad de OBJETOS frutas AGREGADAS.

const agregarAlCarrito = (e) => {
  // console.log(e.target.dataset.fruta);
  // console.log(e.target.dataset.precio);
  // Con el "dataset", devuelvo los valores del "data-fruta" y "data-precio" que creé en las etiquetas "button" del HTML.

  // Necesito los valores "e.target.dataset.fruta" y "e.target.dataset.precio" para poder obtener los valores y crear los objetos de "producto". "Obviamente, que esos valores obtenidos son STRING".
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,

    // Como el valor obtenido es de tipo STRING, lo convierto en ENTERO para poder usarlo con la operación matemática correspondiente.
    precio: parseInt(e.target.dataset.precio),
  };

  // Verifico si existe el objeto en el array "carritoObjeto";
  const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

  // El "findIndex", lo que hace es devolver -1 si el array está vacío.

  // console.log("indice: " + indice);

  if (indice === -1) {
    // Si el índice obtenido por el "findIndex" es igual a -1, quiere decir que el array está vacío.

    carritoObjeto.push(producto); // El elemento (producto) se va a empujar una sola vez dentro del array "carritoObjeto" y van a tener los indices (0, 1, 2) porque son 3 elementos (frutas)
  } else {
    carritoObjeto[indice].cantidad++; // En el caso que exista un elemento, solo le aumento la cantidad de sí mismo mediante "cantidad++" cada vez que el cliente haga CLICK en el botón AGREGAR de dicho producto (frutilla, banana o manzana).
  }

  console.log(carritoObjeto);

  pintarCarrito();
};

const pintarCarrito = () => {
  // Al hacer click en el botón AGREGAR de cada fruta, el forEach se repite y pinta en pantalla a todos los textos de las frutas, entonces agrego el comando: carrito.textContent = ""; para solucionar dicho problema.
  carrito.textContent = ""; // El contenido del texto va a iniciar vacío para que no se repitan los textos "frutilla, banana y/o manzana", cada vez que hago click en el botón "agregar" de cada fruta nombrada. ES COMO QUE REINICIO EL VALOR DEL TITULO DE LA FRUTA Y LO PONGO EN VACÍO, YA QUE ES UN STRING.

  // "Object.values(carritoObjeto).forEach((item) => {}", sirve para transformar un OBJETO en un ARRAY. Pero ya no lo voy a usar porque voy a recorrer el "array" que le paso como parámetro a la arrow function "pintarCarrito".
  carritoObjeto.forEach((item) => {
    // EL "forEach" ITERA EN ARRAYS Y NO EN OBJETOS.
    // Para no cometer errores, uso el ".firstElementChild" que retorna el primer hijo del objeto Element, o bien null si no existen elementos hijos(borré el "firstElementChild" porque ya no lo necesito).

    const clone = template.content.cloneNode(true);

    // Dentro del contenedor "li" con la clase "text-white", encuentro al "span" con la clase "lead", y le cambio el título del "objeto fruta" mediante el "textContent".
    clone.querySelector(".text-white .lead").textContent = item.titulo;

    // Dentro del contenedor "li" con la clase "text-white", encuentro al "span" con la clase "badge", y le cambio la cantidad del "objeto fruta" mediante el "textContent".
    clone.querySelector(".badge").textContent = item.cantidad;

    // Dentro del otro contenedor "li", ingreso a la etiqueta DIV, luego a la etiqueta 'p' mediante su clase "lead" y, finalmente, selecciono a la etiqueta SPAN para pasarle como valor el total del precio por la cantidad de "objetos fruta" mediante el "textContent".
    clone.querySelector("div .lead span").textContent =
      item.precio * item.cantidad;

    clone.querySelector(".btn-danger").dataset.id = item.id; // Al hacer click, obtengo el "id" del botón QUITAR del objeto "frutilla, banana o manzana".

    clone.querySelector(".btn-success").dataset.id = item.id; // Al hacer click, obtengo el "id" de botón AGREGAR del objeto "frutilla, banana o manzana".

    fragment.appendChild(clone); // Todo lo hecho en las lineas anteriores (en cada ciclo del forEach), lo almaceno dentro del FRAGMENT (ya que no está en nuestro DOM), por lo tanto, evitamos el REFLOW.
  });

  carrito.appendChild(fragment); // Una vez que terminan los ciclos del forEach, empujamos el FRAGMENT a nuestro sitio web (o sea, a nuestro DOM)
  pintarFooter();
};

const pintarFooter = () => {
  footer.textContent = "";

  const total = carritoObjeto.reduce(
    // "acc" es el ACUMULADOR del total del valor del objeto fruta.
    // "current" es el VALOR ACTUAL de cada objeto FRUTA. Como "current" es el que recorre y toma a cada objeto FRUTA del array "carritoObjeto", con "current.cantidad" y "current.precio", obtengo los valores de las propiedades "cantidad y precio" de cada objeto FRUTA, y los multiplico entre sí para obtener el valor total de cada uno.
    (acc, current) => acc + current.cantidad * current.precio,
    0 // El número 0, es el segundo parámetro del método "reduce". Sirve para decir como queremos que se devuelva el valor del resultado final de la función CALLBACK del primer parámetro. O sea, que se va a devolver como un ENTERO.

    // "(acc, current) => acc + current.cantidad * current.precio", es un CALLBACK, es el primer parámetro del método "reduce".
  );

  if (total !== 0) {
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector("span").textContent = total;

    // Como en esta función no tenemos ciclos (ya que no hay un forEach), por lo tanto, al no repetirse el ciclo constantemente, podemos empujar el "clone" directamente al FOOTER sin tener que utilizar el FRAGMENT.
    footer.appendChild(clone);
  }
};

const btnAumentar = (e) => {
  // El evento tiene el TARGET y el botón tiene el "dataset" con el ID correspondiente.
  // console.log("me diste click: ", e.target.dataset.id);

  carritoObjeto = carritoObjeto.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });

  pintarCarrito();
};

const btnDisminuir = (e) => {
  carritoObjeto = carritoObjeto.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
        if (item.cantidad === 0) {
          return; // Pongo "return" para que no devuelva nada si es que no hay ningún elemento y salga del condicional IF.
        }

        // El "return item" es el que va dentro del ELSE. Lo pongo de esta forma para no escribir el ELSE y ahorrarme un par de lineas de código. LO que dice dicho código es: Si "item.cantidad" es distinto de cero, va a retornar la cantidad del "item", o sea, la cantidad de la fruta correspondiente.
        return item;
      }
    } else {
      return item; // Si el ID del objeto fruta, NO es igual al ID seleccionado del botón QUITAR, va a retornar a los demás items.
    }
  });

  // Y una vez que termina todo el ciclo, pinta el array "carritoObjeto" mediante el llamado de la función "pintarCarrito()"
  pintarCarrito();
};

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
  e.preventDefault(); 
  // El preventDefault(), sirve para EVITAR que la página web se actualice por defecto cada vez que hago click. En este caso, al evitar el comportamiento por defecto, el ANCLA no puede enviar el valor del "href" a la URL, ya que le página web nunca se actualiza y queda estática.
});
*/
/*---------------------------------------------*/
