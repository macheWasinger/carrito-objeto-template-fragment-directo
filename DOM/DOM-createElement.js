const lista = document.querySelector("#lista");

// No se pueden empujar dos elementos iguales porque elimina al anterior y agrega al nuevo. Por lo que, siempre va a empujar uno solo, por ejemplo:
// lista.appendChild(li);
// lista.appendChild(li);
//Para poder empujar o agregar varios elementos al elemento padre, es recomendable hacerlo recorriendo a un array con el forEach.

const arrayPaises = ["Perú", "México", "Colombia"];

// REFLOW: curre cuando un navegador debe procesar y dibujar parte o la totalidad de una página web nuevamente, como después de una actualización en un sitio interactivo.

// IMPORTANTE: Con el "fragment", evito el "reflow" de las páginas.
const fragment = document.createDocumentFragment();

/*
arrayPaises.forEach((pais) => {
  const li = document.createElement("li");
  li.textContent = pais;
  fragment.appendChild(li);
});

lista.appendChild(fragment);
*/

// Si quiero que imprima al revés, osea: "Colombia", "Bolivia", "Perú", lo hago mediante "firstChild":
arrayPaises.forEach((pais) => {
  const newNode = document.createElement("li");
  newNode.textContent = pais;

  const referenceNode = fragment.firstChild;

  fragment.insertBefore(newNode, referenceNode);
});

lista.appendChild(fragment);
