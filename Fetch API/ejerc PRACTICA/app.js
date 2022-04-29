document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    loadingData(true);

    const res = await fetch("https://rickandmortyapi.com/api/character");

    const data = await res.json();

    pintarCard(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};

const pintarCard = (data) => {
  const cardsDinamicas = document.getElementById("card-dinamicas");

  const templateCards = document.getElementById("templateCards");

  const fragment = document.createDocumentFragment();

  data.results.forEach((item) => {
    const clone = templateCards.content.cloneNode(true);

    clone.querySelector("img").setAttribute("src", item.image);
    clone.querySelector("h5").textContent = item.name;
    clone.querySelector("p").textContent = item.species;

    fragment.appendChild(clone);
  });
  cardsDinamicas.appendChild(fragment);
};

const loadingData = (estado) => {
  const loading = document.getElementById("loading");

  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
