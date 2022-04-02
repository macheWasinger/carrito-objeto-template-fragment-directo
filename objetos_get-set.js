const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],

  get nombreMayuscula() {
    // En el "get", es obligatorio NO poner parámetros dentro de los parentesis.
    return this.nombre.toUpperCase();
    // Acá, mediante el "this", llamo a la variable (de la cual quiero obtener su valor), y le aplico la propiedad que quiero. En este caso, le aplico la propiedad "toUppercase()" que sirve para convertir el string en mayúscula.
  },

  set agregarEnemigo(nuevoEnemigo) {
    this.enemigos.push(nuevoEnemigo);
  },
};

console.log(gato.nombreMayuscula); // Acá, no hace falta ponerle los parentesis al método get. En este caso, al "nombreMayuscula".

gato.agregarEnemigo = "batman";

console.log(gato);
