const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],

  comer(comida) {
    return `${this.nombre} está comiendo ${comida}`;
  },
  mostrarEnemigos() {
    return this.enemigos.forEach((item) => console.log(item));
  },
};

/*
// IMPORTANTE: NO se puede destructurar un método (función) que contenga el "this". Por ejemplo:
const { comer } = gato;
console.log(comer("pez"));
*/

/*
// De esta forma tampoco se puede destructurar:
const comer = gato.comer;
console.log(comer("pez"));
*/

// De esta forma, SÍ funciona:
const comer = gato.comer;
console.log(gato.comer("pez"));
