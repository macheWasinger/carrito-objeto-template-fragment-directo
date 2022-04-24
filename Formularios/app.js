/*********** EXPRESIÓN REGULAR ************/
// Es una notación LITERAL (conocido como PATRÓN)
// const regExp = /bluuweb/i;
// Al poner un string /bluuweb/ como PATRÓN, va a buscar esa cadena "bluuweb" dentro de la notación de objeto.

//const regExp = /[ue]/i;
//En cambio, al poner caracteres entre corchetes, en este caso: [ue], va a buscar ambas letras dentro del conjunto de cadenas.

// const regExp = /bluweb|bluuweb/i;
// En este caso, gracias a la barra vertical '|', puedo decir que busque si existe una cadena o la otra ("bluweb" o "bluuweb")

//--------------------------------------------//
/*
const regExp = /[A-Za-z0-9]/i;

console.log(regExp.test("$$$%")); 
// En este caso, me va a devolver FALSE porque la "notación literal" admite letras y números, y NO símbolos.
*/
//--------------------------------------------//

///////// OTRA FORMA MÁS "REDUCIDA" ES: /////////
/*
const regExpObjeto = new RegExp("bluweb|bluuweb", "i"); // Es una notación de OBJETO. Al pasarle la 'i' como parámetro, va a reconocer entre minúsculas y mayúsculas (NO HACE DIFERENCIAS).

console.log(regExpObjeto.test("asdaseedas bluuweb asdeeas"));
///////////////////////////////////////////////
*/

//-------------- SOLO NÚMEROS --------------//
/*
const regExp = /^\d+$/gi; // Esta "notación literal" es solo para NÚMEROS. Entonces, si el usuario tipea letras, va a devolver FALSE.

console.log(regExp.test("123"));
*/
//-----------------------------------------//

///////////// SOLO LETRAS SIN TILDE /////////////
/*
const regExp = /^[a-zA-Z ]*$/;

console.log(regExp.test("asdjksajdkl asjdljs"));
*/
///////////////////////////////////////////////

/********** SOLO LETRAS CON O SIN TILDE **********/
/*
const regExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
console.log(regExp.test("kndsn"));
*/

//------------- VALIDAR EMAIL -------------//
/*
const regExp =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

console.log(regExp.test("eugenio2018@hotmail.com"));
//----------------------------------------//
/*
/******************************************/

//--------- FORMULARIO ---------//
////// Por querySelector input //////
/*
const formulario = document.querySelector("#formulario");

// En este ejemplo, con el "querySelector" manipulo a los atributos "name" y, por consiguiente, a sus valores "userName" y "userEmail" que pertencen a los input.

const userName = document.querySelector("input[name= 'userName']");

const userEmail = document.querySelector("input [name='userEmail']");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Funciona");

  console.log(`userName: ${userName.value}`);
  console.log(`userEmail: ${userEmail.value}`);
});
*/

////// Por id /////////
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

// Esta expresión regular sirve para capturar letras en mayúsculas o minúsculas con o sin tilde.
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

// Esta expresión regular sirve para validar un EMAIL. O sea, para que se cumpla estrictamente con el formato de un EMAIL.
const regUserEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const alertSuccess = document.getElementById("alertSuccess");
const alertEmail = document.getElementById("alertEmail");
const alertName = document.getElementById("alertName");

const pintarMensajeExito = () => {
  // Con el "classList", puedo decirle que elimine la clase "d-none" del DIV que contiene la clase "alertSuccess".
  // "d-none", es "display: none" en Bootstrap.
  alertSuccess.classList.remove("d-none");
  alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
  errores.forEach((item) => {
    item.tipo.classList.remove("d-none");
    item.tipo.textContent = item.msg;
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Detiene lo que hace el navegador por DEFECTO.

  // En los "console.log" obtengo la infomación que se capturo de cada etiqueta INPUT mediante "userName.value" y "userEmail.value"
  // console.log("userName: " + userName.value);
  // console.log(`userEmail: ${userEmail.value}`);

  alertSuccess.classList.add("d-none"); // En caso de que se vuelva a presionar ENVIAR, va a ocultarse el cartel de "Mensaje enviado con éxito" y se va a volver a ejecutar si pasa las validaciones correspondientes.

  const errores = [];

  // Gracias al método "trim()", esto devuelve TRUE si existe solo espacios.
  // console.log(!userName.value.trim());

  if (!regUserName.test(userName.value) || !userName.value.trim()) {
    userName.classList.add("is-invalid");
    // A esta condición entra cuando no se cumplió la validación.
    // console.log("Formato no válido!");
    // return;
    // En este caso, el "return" no retorna nada. Solo hace que salga del condicional IF si es que no se cumple la condición. Por lo tanto, va a retornar el próximo "console.log("FORMULARIO ENVIADO")" que sería como tener un ELSE y que este retorne dicho "console.log"

    errores.push({
      tipo: alertName,
      msg: "Formato no válido en el campo nombre, solo letras",
    });
  } else {
    // Al ELSE entra cuando se cumplió la validación del userName del IF. Por lo tanto:
    // ELIMINO la clase "is-invalid" par que se oculte el icono del ERROR.
    userName.classList.remove("is-invalid");

    // AGREGO la clase "is-valid" al INPUT para que aparezca el icono de la tilde en color verde.
    userName.classList.add("is-valid");

    // AGREGO la clase "d-none" a la etiqueta 'p' para que se oculte.
    alertName.classList.add("d-none");
  }

  if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
    userEmail.classList.add("is-invalid");
    // console.log("Formato no válido!");
    // return;
    errores.push({
      tipo: alertEmail,
      msg: "Escriba un correo válido",
    });
  } else {
    // Al ELSE entra cuando se cumplió la validación del userEmail del IF. Por lo tanto:
    // ELIMINO la clase "is-invalid" par que se oculte el icono del ERROR.
    userEmail.classList.remove("is-invalid");

    // AGREGO la clase "is-valid" al INPUT para que aparezca el icono de la tilde en color verde.
    userEmail.classList.add("is-valid");

    // AGREGO la clase "d-none" a la etiqueta 'p' para que se oculte.
    alertEmail.classList.add("d-none");
  }

  if (errores.length !== 0) {
    // Si la longitud del array "errores" es distinto de cero, quiere decir que tiene un error. Entonces, se aplica el "return" para que salga del condicional IF.
    pintarMensajeError(errores);
    return;
  }

  console.log("FORMULARIO ENVIADO");
  pintarMensajeExito();
});

//----------------------------//
