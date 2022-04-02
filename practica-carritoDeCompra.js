const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
// Creo el FRAGMENT para evitar el REFLOW.

const btnesBotones = document.querySelectorAll(".card .btn"); // Pongo "querySelectorAll" porque son varios botones y los vamos a buscar dentro de la clase ".card"

const carritoObjeto = {}; // Este es un OBJETO VACÍO y lo uso más adelante para guardar la cantidad de frutas AGREGADAS.

const agregarAlCarrito = (e) => {
  console.log(e.target.dataset.fruta); // Con el "dataset", devuelvo el valor del "data-fruta" que cree en las etiquetas del HTML.

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta, // Este ID está de más porque la variable "titulo" tiene el mismo valor. Aunque, siempre es recomendable tener un ID. Pero lo vamos a usar más adelante.
    cantidad: 1,
  };

  if (carritoObjeto.hasOwnProperty(producto.titulo)) {
    // Si existe la propiedad "titulo" de nuestro objeto "producto" (o sea, que el producto existe porque se hizo click en el botón AGREGAR de alguna fruta). Entonces, si existe el producto, con "carritoObjeto[producto.titulo]" capturo la cantidad de cada fruta que viene de nuestro carrito objeto y le sumamos 1.
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
  }

  carritoObjeto[producto.titulo] = producto;

  pintarCarrito();

  //   console.log(carritoObjeto);
};

const pintarCarrito = () => {
  // Como al hacer click en cada botón AGREGAR de cada fruta, el forEach se repite y pinta en pantalla a todos los textos de las frutas, agrego el siguiente comando para solucionar dicho problema:
  carrito.textContent = ""; // El contenido del texto va a iniciar vacío para que no se repitan los textos "frutilla, banana y manzana", cada vez que hago click en el botón "agregar" de cada fruta nombrada.

  // "Object.values", sirve para transformar un OBJETO en un ARRAY.
  Object.values(carritoObjeto).forEach((item) => {
    // Para no cometer errores, uso el ".firstElementChild" que retorna el primer hijo del objeto Element, o bien null si no existen elementos hijos.
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

btnesBotones.forEach((btn) => {
  btn.addEventListener("click", agregarAlCarrito);
});
