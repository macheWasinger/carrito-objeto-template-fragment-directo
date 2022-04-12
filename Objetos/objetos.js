// OBJETO LITERAL
const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
};

/*
// ACCEDEMOS (DE DIFERENTES FORMAS) A LOS VALORES DEL OBJETO LITERAL MEDIANTE LA PROPIEDAD "READ" DEL "CRUD":
console.log(gato); // Invoco a todas las propiedades del objeto "gato".

console.log(gato.nombre); // Invoco a la propiedad "nombre" para obtener el nombre del objeto "gato".

console.log(gato["nombre"]); // Es OTRA FORMA de invocar a la propiedad "nombre" para obtener el nombre del objeto "gato".

console.log(gato.duerme); // Invoco a la propiedad "duerme" para obtener el booleano del objeto "gato".

console.log(gato["enemigos"][0]); // Invoco a la propiedad "enemigos" mediante su índice para obtener el valor booleano del objeto "gato".

console.log(gato.enemigos[0]); // Es OTRA FORMA de invocar a la propiedad "enemigos" mediante su índice para obtener el valor booleano del objeto "gato".


//////////// El CRUD (propiedades) ////////////
// CREATE:
gato.color = "azul";
console.log(gato);

// READ (lo hice con los CONSOLE.LOG en las lineas de arriba)

// UPDATE:
gato.edad = 5;
console.log(gato);

// DELETE:
delete gato.duerme;
console.log(gato);

*/

//////////// hasOwnProperty ////////////
if (gato.hasOwnProperty("nombre")) {
  gato.nombre = "chicho";
}

console.log(gato);
