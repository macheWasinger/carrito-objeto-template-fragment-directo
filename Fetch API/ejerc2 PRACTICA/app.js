document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    loadingData(true);

    const res = await fetch("https://digimon-api.vercel.app/api/digimon");

    const data = await res.json();
    renderizarData(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};

const renderizarData = (data) => {
  const cards = document.querySelector("#card-dinamica");
  const templateCards = document.querySelector("#template-cards");
  const fragment = document.createDocumentFragment();

  data.forEach((item) => {
    const clone = templateCards.content.cloneNode(true);
    clone.querySelector("#id-img").setAttribute("src", item.img);
    clone.querySelector(".name-personaje").textContent = item.name;
    clone.querySelector(".level-personaje").textContent = item.level;

    fragment.appendChild(clone);
  });

  cards.appendChild(fragment);
};

const loadingData = (estado) => {
  const loading = document.querySelector("#loading");

  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
