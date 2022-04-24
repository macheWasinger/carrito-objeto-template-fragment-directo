const carrito = document.querySelector("#carritoCompras");
const botonAgregar = document.querySelector("#idBotonAgregar");
const footer = document.querySelector("#footer");
const template = document.querySelector("#template");
const templateFooter = document.querySelector("#templateFooter");
const textoStock = document.querySelector(".stock");

const idFinalizarCompra = document.querySelector("#idFinalizarCompra");

const ticketCompra = document.querySelector("#idTicketCompra");

const templateTicket = document.querySelector("#templateTicket");

const fragment = document.createDocumentFragment();
const fragmentTicket = document.createDocumentFragment();

const botonComprar = document.querySelector("#botonComprar");

// let pressBotonFinalizar = false;

document.addEventListener("click", (e) => {
  // e.preventDefault();
  if (e.target.matches("#idBotonAgregar")) {
    agregarAcarrito(e);
  }

  if (e.target.matches("#idQuitar")) {
    quitarProducto(e);
  }

  if (e.target.matches("#idAumentar")) {
    agregarProducto(e);
  }

  if (e.target.matches("#idFinalizarCompra")) {
    pintarTicket();
  }

  if (e.target.matches("#botonComprar")) {
    // e.preventDefault();
    console.log("CLICK EN BOTON COMPRAR");
  }
});

let carritoCompras = [];

const agregarAcarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.name,
    id: e.target.dataset.name,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
    stock: 20,
  };

  const indice = carritoCompras.findIndex((item) => item.id === producto.id);

  if (indice === -1) {
    carritoCompras.push(producto);
  } else {
    carritoCompras[indice].cantidad++;
    carritoCompras[indice].stock--;
  }

  console.log(carritoCompras);
  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.textContent = "";

  carritoCompras.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".cantProducto").textContent = item.cantidad;
    clone.querySelector(".titulo-producto").textContent = item.titulo;
    clone.querySelector(".precioTotalProducto span").textContent =
      item.cantidad * item.precio;

    if (item.stock !== 0) {
      clone.querySelector(
        ".stock"
      ).textContent = `Stock: ${item.stock} disponibles`;
    }

    if (item.stock === 0) {
      clone.querySelector(".stock").textContent = "¡Sin stock disponible!";
      clone.querySelector(".stock").style.color = "#DC3545";
      clone.querySelector(".stock").style.fontWeight = 600;
    }

    if (item.stock === 1) {
      clone.querySelector(
        ".stock"
      ).textContent = `Stock: ${item.stock} disponible`;
    }

    clone.querySelector("#idQuitar").dataset.id = item.id;
    clone.querySelector("#idAumentar").dataset.id = item.id;

    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);

  pintarFooter();
};

const pintarFooter = () => {
  footer.textContent = "";
  const total = carritoCompras.reduce(
    (acum, actual) => acum + actual.cantidad * actual.precio,
    0
  );

  if (total !== 0) {
    const clone = templateFooter.content.cloneNode(true);

    clone.querySelector(".totalcompra span").textContent = total;

    footer.appendChild(clone);
  }
};

const quitarProducto = (e) => {
  e.preventDefault();

  carritoCompras = carritoCompras.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
        item.stock++;

        if (item.cantidad === 0) {
          return;
        }

        return item;
      }
    }

    return item;
  });

  pintarCarrito();
};

const agregarProducto = (e) => {
  e.preventDefault();

  carritoCompras = carritoCompras.map((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.stock > 0) {
        item.cantidad++;
        item.stock--;
      }
    }
    return item;
  });

  pintarCarrito();
};

const pintarTicket = () => {
  carrito.textContent = "";

  const sectionTicket = document.querySelector("#idSectionTicket");
  sectionTicket.style.display = "block";

  const titleTicket = document.querySelector(".title-ticket");
  titleTicket.style.display = "block";

  const totalcompraTicket = document.querySelector(".totalcompra-ticket");
  totalcompraTicket.style.display = "block";

  const agradecimientoCompra = document.querySelector(".agradecimientoCompra");
  agradecimientoCompra.style.display = "block";

  const totalTicket = carritoCompras.reduce(
    (acc, current) => acc + current.cantidad * current.precio,
    0
  );

  carritoCompras.forEach((item) => {
    const cloneProduct = templateTicket.content.cloneNode(true);

    cloneProduct.querySelector(".cantProducto-ticket span").textContent =
      item.cantidad;

    cloneProduct.querySelector(".titulo-producto-ticket").textContent =
      item.titulo;

    cloneProduct.querySelector(".precioTotalProducto-ticket span").textContent =
      item.cantidad * item.precio;

    fragmentTicket.appendChild(cloneProduct);
  });

  totalcompraTicket.querySelector(".totalcompra-ticket span").textContent =
    totalTicket;
  ticketCompra.appendChild(fragmentTicket);
};
