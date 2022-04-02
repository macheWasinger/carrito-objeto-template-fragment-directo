/////////// OBJETOS ANIDADOS ///////////
// OBJETO
const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],

  // OBJETO
  otros: {
    amigos: ["cobarde", "timido"],

    // OBJETO
    favoritos: {
      // OBJETO
      comida: {
        frio: "salmon",
        caliente: "pollo",
      },
    },
  },
};

console.log(gato.otros.favoritos.comida.frio); // ACCEDO A LA PROPIEDAD "frio". POR LO QUE ME VA A DEVOLVER EL STRING "salmon".

console.log(gato.otros.amigos[0]); // ACCEDO AL STRING "cobarde".
