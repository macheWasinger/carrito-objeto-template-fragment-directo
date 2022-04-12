// OBJETOS CON FUNCIONES (métodos) COMO PROPIEDAD //
// OBJETO
const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],

  // Una función, al ser usada como propiedad, se llama "Método".
  comer(alimento) {
    console.log(`
      ${this.nombre} está comiendo ${alimento}
      `);
  },

  // No puedo crear una arrow function como método (propiedad), pero sí puedo crearla dentro de un método.
  listarEnemigos() {
    this.enemigos.forEach((item) => console.log(item));
  },
};

gato.comer("pez");

gato.listarEnemigos();
