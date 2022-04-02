/*
//////// FUNCION DECLARATIVA ////////
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(numeroAleatorio(10, 21));
// Devuelve un número entre 10 y 20. "NO INCLUYE AL 21"


//////// FUNCION EXPRESADA ////////
const numAzar = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
console.log(
  numAzar(100, 201)
); 
// Devuelve un número entre 100 y 200. "NO INCLUYE AL 201"
*/

/*
//////// ARRAY FUNCTION (FUNCIÓN DE FLECHA) ////////
const azarFlecha = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
console.log(
  azarFlecha(1, 11)
);
// Devuelve un número entre 1 y 10. "NO INCLUYE AL 11"
*/

/*
// ESTA FORMA DE HACERLO ES SIN EL RETURN Y SIN LAS LLAVES. PERO SOLO ES PERMITIDA CUANDO TENEMOS UNA SOLA LÍNEA DE CÓDIGO DENTRO DEL SCOPE.
const azarFlecha = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(azarFlecha(10, 20));
// Devuelve un número entre 10 y 19. "NO INCLUYE AL 20
*/

/*
// OTRA FORMA ES CON UN SOLO PARÁMETRO DENTRO DE LA ARROW FUNCTION:
const azarFlecha = (max) => Math.floor(Math.random() * (max - 1)) + 1;

console.log(azarFlecha(15));
// Devuelve un número entre 1 y 14. "NO INCLUYE AL 15
*/

// OTRA FORMA ES OMITIENDO UN PARÁMETRO DENTRO DE LA ARROW FUNCTION:
const azarFlecha = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;

//Hay 2 formas de omitir un parámetro. Se puede omitir reemplazando del parámetro por "null" o "undefined". En este caso, omito el parámetro "min".
console.log(azarFlecha(undefined, 15));
console.log(azarFlecha(null, 15));
// Devuelve un número entre 1 y 14. "NO INCLUYE AL 15
