//------------------------------------//

// const letra = prompt("Ingrese una letra: ");

// const comprobarLetra = new RegExp(letra);
// const verificacion = comprobarLetra.test(texto);

// console.log(verificacion);

// 2) A partir de un selector de colores, cambia el color del cuadro principal al hacer clicksobre uno de los colores. Ver las siguientes imágenes:

/*
const colors = document.querySelectorAll("#color");

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");
const color6 = document.querySelector(".color6");

// console.log(colors);

colors.forEach((item) => {
  item.addEventListener("mouseover", () => {
    setTimeout(() => {
      if (item === color1) {
        document.querySelector("#expandColor").style.backgroundColor =
          "#e23e3b";
      }

      if (item === color2) {
        document.querySelector("#expandColor").style.backgroundColor =
          "#dc6c1a";
      }

      if (item === color3) {
        document.querySelector("#expandColor").style.backgroundColor =
          "#fbee8d";
      }

      if (item === color4) {
        document.querySelector("#expandColor").style.backgroundColor =
          "#48bc77";
      }

      if (item === color5) {
        document.querySelector("#expandColor").style.backgroundColor =
          "#81e5d7";
      }

      if (item === color6) {
        document.querySelector("#expandColor").style.backgroundColor =
          "#d93c8b";
      }
    }, 300);
  });
});
*/

/* EJERCICIO:
Cambio de imágenes. Realiza una página que muestre una imagen que cambie cuando el ratón en pase por encima de la imagen y que vuelva a cambiar cuando salga de ella. 
*/
/*
const idContainerImg = document.getElementById("idContainerImg");

const idImg = document.getElementById("idImg");

idImg.addEventListener("mouseover", (e) => {
  setTimeout(() => {
    e.preventDefault;
    idImg.setAttribute(
      "src",
      "https://img.planetafobal.com/2022/02/river-plate-nuevo-escudo-2022-df.jpg"
    );
  }, 500);
});

idImg.addEventListener("mouseout", (e) => {
  setTimeout(() => {
    e.preventDefault;
    idImg.setAttribute(
      "src",
      "https://gladiadoresdelfutbol.com/wp-content/uploads/2022/02/Diseno-sin-titulo-2022-02-07T152618.660.jpg"
    );
  }, 500);
});
*/
/*-----------------------------------------------*/

/*
  EJERCICIO:
  Escribir un algoritmo que: imprima los números del 1 al 100, con la condición que si el número a imprimir es multiplo de 3, imprima el string "Fizz", si el número es multiplo de 5 imprima: "Buzz", y si es miltiplo de ambos, imprima: "FizzBuzz".
*/
for (let n = 1; n <= 100; n++) {
  // if (n % 3 === 0 && n % 5 === 0) {
  //   console.log("FizzBuzz");
  // } else if (n % 3 === 0) {
  //   console.log("Fizz");
  // } else if (n % 5 === 0) {
  //   console.log("Buzz");
  // } else {
  //   console.log(n);
  // }

  let mensaje = "";

  if (n % 3 === 0) {
    mensaje += "Fizz";
  }

  if (n % 5 === 0) {
    mensaje += "Buzz";
  }
  console.log(mensaje || n); // Dentro del "console.log", existe la siguiente condición: "SI EXISTE EL MENSAJE, IMPRIMÍ EL MENSAJE O, SINO, IMPRIMÍ EL NÚMERO 'n' QUE NO SEA MULTIPLO."
}
