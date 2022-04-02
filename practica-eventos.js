const inputColor = document.querySelector("#inputColor");

const btnVisualizar = document.querySelector("#btnVisualizar");

const parrafoHexa = document.querySelector("#parrafoHexa");

const cardColor = document.querySelector("#cardColor");

console.log(inputColor.value);

btnVisualizar.addEventListener("click", () => {
  console.log("me diste un click");
  console.log(inputColor.value);

  parrafoHexa.textContent = inputColor.value;
  cardColor.style.backgroundColor = inputColor.value;
});
