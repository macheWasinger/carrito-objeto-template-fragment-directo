const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = new FormData(formulario);

  for (let item of inputs) {
    console.log(item);
  }

  // Con el "FormData", puedo acceder a las informaciones(valores) de cada INPUT mediante el "get";
  console.log(inputs.get("userName"));
  console.log(inputs.get("userEmail"));

  console.log("Procesando formulario");
});
