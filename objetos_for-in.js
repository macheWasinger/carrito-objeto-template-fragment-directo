/////////// FOR IN en OBJETOS ///////////
// OBJETO
const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
};

// EXISTEN DOS FORMAS PARA ITERAR UN OBJETO PINTANDO SUS VALORES:

// 1°) FOR IN
// SIRVE PARA SABER CUÁLES PROPIEDADES TENEMOS EN NUESTRO OBJETO.
for (let propiedad in gato) {
  console.log(gato[propiedad]);
}

// 2°) Object.values
// Primero, transformo el objeto en "array" para poder recorrerlo con el "forEach".
console.log(Object.values(gato));
Object.values(gato).forEach((item) => console.log(item));

// IMPORTANTE: el "for of" es SOLO para Array.
