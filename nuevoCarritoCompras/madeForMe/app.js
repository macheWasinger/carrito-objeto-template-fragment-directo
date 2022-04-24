const carritoProductos = document.getElementById("idCarrito");
const template = document.getElementById("idTemplate");
const footer = document.getElementById("idFooter");
const templateFooter = document.getElementById("idTemplateFooter");
const fragment = document.createDocumentFragment();

const botonFinalizar = document.getElementById("idButtonFinalizar");

document.addEventListener("click", (e) => {
  e.preventDefault();

  //   console.log("clickeaste");
  if (e.target.matches("#idButtonAgregar")) {
    // console.log(
    //   "CLICK EN EL BOTÓN AGREGAR: " + e.target.matches("#idButtonAgregar")
    // );

    agregarProdAlCarrito(e);
  }

  if (e.target.matches("#idQuitar")) {
    botonDisminuir(e);
  }

  if (e.target.matches("#idAgregar")) {
    botonAumentar(e);
  }

  if (e.target.matches("#idButtonFinalizar")) {
    finalizarCompra(e);
  }
});

let carritoObjetosProductos = [];

const agregarProdAlCarrito = (e) => {
  const product = {
    title: e.target.dataset.producto,
    id: e.target.dataset.producto,
    cantidadProductos: 1,
    precio: parseInt(e.target.dataset.precio),
  };

  //   carritoObjetosProductos.push(product);

  const indice = carritoObjetosProductos.findIndex(
    (item) => item.id === product.id
  );

  if (indice === -1) {
    carritoObjetosProductos.push(product);
  } else {
    carritoObjetosProductos[indice].cantidadProductos++;
  }

  // console.log("CARRITO: " + carritoObjetosProductos);

  renderizarCarrito();
};

const renderizarCarrito = () => {
  carritoProductos.textContent = "";

  carritoObjetosProductos.forEach((item) => {
    const clonar = template.content.cloneNode(true);

    clonar.querySelector(".cantProduct").textContent = item.cantidadProductos;

    clonar.querySelector(".titleProduct").textContent = item.title;

    clonar.querySelector("#idTotalProduct span").textContent =
      item.cantidadProductos * item.precio;

    clonar.querySelector("#idQuitar").dataset.id = item.id;
    clonar.querySelector("#idAgregar").dataset.id = item.id;

    fragment.appendChild(clonar);
  });

  carritoProductos.appendChild(fragment);

  renderizarFooter();
};

const renderizarFooter = () => {
  footer.textContent = "";

  const total = carritoObjetosProductos.reduce(
    (acc, current) => acc + current.cantidadProductos * current.precio,
    0
  );

  if (total !== 0) {
    const clonar = templateFooter.content.cloneNode(true);
    clonar.querySelector(".precioTotal span").textContent = total;

    footer.appendChild(clonar);
  }
};

const botonDisminuir = (e) => {
  carritoObjetosProductos = carritoObjetosProductos.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidadProductos > 0) {
        item.cantidadProductos--;

        // console.log("item.id: " + item.id);
        // console.log("e.target.dataset.id: " + e.target.dataset.id);

        if (item.cantidadProductos === 0) {
          return;
        }
        return item;
      }
    }
    return item;
  });

  renderizarCarrito();
};

const botonAumentar = (e) => {
  carritoObjetosProductos = carritoObjetosProductos.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidadProductos++;
    }
    return item;
  });

  renderizarCarrito();
};
