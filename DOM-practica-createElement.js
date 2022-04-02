const lista = document.querySelector("#lista");

// const arrayPaises = ["Perú", "México", "Colombia"];

// const fragment = document.createDocumentFragment();

{
  /* <ul id="lista">
  <li class="list">
    <b>Pais: </b>
    <span class="text-primary">Aqui va el pais</span>
  </li>
</ul>; */
}

// arrayPaises.forEach((pais) => {
//   const li = document.createElement("li");
//   li.className = "list";

//   const b = document.createElement("b");
//   b.textContent = "Pais: ";

//   const span = document.createElement("span");
//   span.className = "text-primary";
//   span.textContent = pais;

//   li.appendChild(b);
//   li.appendChild(span);

//   fragment.appendChild(li);
// });

// lista.appendChild(fragment);

/*
let template = ""; // EL "template" SIRVE PARA EVITAR EL "REFLOW".

arrayPaises.forEach((pais) => {
  template += `
  <li class="list">
    <b>País: </b>
    <span class="text-primary">${pais}</span>
  </li>
    `;
});

lista.innerHTML = template;
*/

// El "template", sirve para evitar que se produzca el "reflow".
const liTemplate = document.querySelector("#liTemplate");

const clone = liTemplate.content.cloneNode(true); //content.cloneNode(true), sirve para clonar el "template". Le agrego el "true" para que lo clone.

clone.querySelector(".text-primary").textContent =
  "agregué a través de un template.";

lista.appendChild(clone);
