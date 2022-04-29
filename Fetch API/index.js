// El evento "DOMContentLoaded", primero espera que cargue todo nuestro DOM y después ejecuta la siguiente ARROW FUNCTION. Ya que, si no carga, va a ser imposible capturar nuestro TEMPLATE, nuestra información y pintarla.
document.addEventListener("DOMContentLoaded", () => {
  fetchData(); // fetchData(), se va a ejecutar una vez que termine de cargar nuestro DOM.
});

// Hago la solicitud a nuestra API.
const fetchData = async () => {
  // console.log("Obteniendo datos");
  try {
    loadingData(true); // Si todavía no cargó completamente el DOM, a la función "loadingData(true)", le paso como parámetro un TRUE para que APAREZCA el efecto CARGANDO en pantalla.

    // En el "fetch", SIEMPRE son dos "await" porque son dos PROMESAS (Promise) que van a venir.
    // El "await", lo uso para EVITAR usar el "then y el catch".
    const res = await fetch("https://rickandmortyapi.com/api/character"); // El "await", lo que nos dice es: "ESPERA, DEJAME TRAER LA RESPUESTA, LO CONVIERTO A JSON Y TE LO DEVUELVO":
    const data = await res.json();

    // Una vez que tenemos la información (data) convertida en JSON, la pintamos:
    pintarCard(data);
  } catch (error) {
    console.log(error);
  } finally {
    // Cuando carga completamente el DOM, a la función "loadingData(false)", le paso como parámetro un FALSE para que DESAPAREZCA el efecto CARGANDO en pantalla.
    loadingData(false);
  }
};

const pintarCard = (data) => {
  // En "cards", vamos a pintar nuestras tarjetitas.
  const cards = document.getElementById("card-dinamicas");
  const templateCard = document.getElementById("template-card").content; // El ".content", también lo podría eliminar de esta linea y escribirlo junto con la declaración del "clone", osea: "const clone = templateCard.content.cloneNode(true)"

  const fragment = document.createDocumentFragment();
  // Es SUPER RECOMENDABLE usar el FRAGMENT, ya que, al NO pertenecer al DOM, va guardando el elemento recorrido en cada iteración y, una vez que terminó de iterarse y acumularse en el FRAGMENT (en este caso, 20 elementos de la API de "rickandmorty"), devuelve de una sola vez y los renderiza a todos juntos para evitar el maldito "reflow". En cambio, el "innerHTML" se puede usar, pero NO ES RECOMENDABLE, dado que, renderiza todo el tiempo, o sea, renderiza cada vez que el LOOP (forEach, for of, for in, while, etc) itera un elemento y eso produce el maldito "reflow".

  // "results", es una propiedad de tipo ARRAY de la API.
  data.results.forEach((item) => {
    // console.log(item);
    const clone = templateCard.cloneNode(true);
    clone.querySelector("h5").textContent = item.name;

    clone.querySelector("p").textContent = item.species;

    clone.querySelector(".card-img-top").setAttribute("src", item.image);

    // Guardamos en el fragment para evitar el REFLOW.
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

// Pintar el loading
const loadingData = (estado) => {
  const loading = document.getElementById("loading"); // Esto podría ir con las demás capturas de arriba de todo. Pero acá, queda un poco más ordenado.
  if (estado) {
    loading.classList.remove("d-none"); // Si se cumple la condición (o sea, que el estado es TRUE), ELIMINO la clase "d-none" que se encuentra en el SECTION del loading en el archivo HTML.
  } else {
    loading.classList.add("d-none"); // Si no se cumple la condición (o sea, que el estado es FALSE), AGREGO la clase "d-none" que se encuentra en el SECTION del loading en el archivo HTML.
  }
};
