const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector("#liTemplate");

const arrayPaises = ["Perú", "México", "Colombia"];

const clickPaies = (e) => console.log("Me diste click", e.target); // El "e.target" sirve para pinta el elemento (ETIQUETA Y SU CONTENIDO) al cual le estoy haciendo CLICK.

// Esta es la mejor opción para evitar el "reflow". Pero si tengo un solo elemento ("li" o lo que sea), no hace falta hacer esto. Tranquilamente, podría hacerlo con un "createElement".
arrayPaises.forEach((pais) => {
  // el "firstElementChild" soluciona el tema de que si voy a agregar un "addEventListener" a los elementos que vienen de forma dinámica.
  const clone = liTemplate.content.firstElementChild.cloneNode(true);
  clone.querySelector("span").textContent = pais;

  clone.addEventListener("click", clickPaies);

  fragment.appendChild(clone);
});

lista.appendChild(fragment);
