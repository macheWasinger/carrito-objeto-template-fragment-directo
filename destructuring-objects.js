/////////// DESTRUCTURING OBJECTS ///////////

// const gato = {
//   //   nombre: "valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
// };

// const nombreGato = gato.nombre;

//El destructuring, sirve para obtener los valores de las propiedades del objeto y guardarlos en nuevas variables.
// const { nombre, duerme, edad } = gato;
//Acá creo las variables "nombre", "duerme" y "edad".

// console.log(nombre, duerme, edad);

/////////////// ALIAS ///////////////
// En el caso que variable "nombre" no exista, con el ALIAS "nombreSuperGato", le asigno un valor por defecto. En este caso, el valor va a ser el string "sin nombre".
// const { nombre: nombreSuperGato = "sin nombre", edad } = gato;

// console.log(nombreSuperGato, edad);

//////// DESTRUCTURING CON DATOS ANIDADOS ////////
const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],

  // OBJETO
  otros: {
    amigos: ["cobarde", "timido", "pegajoso"],

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

/*
// UNA FORMA ES MEDIANTE "Destructuring"
const { amigos } = gato.otros;
console.log(amigos);
*/

/*
// OTRA FORMA ES CON "Destructuring", PERO ASIGANANDOLE EL VALOR DE LA VARIABLE "amigos" A UN ALIAS (variable) llamado "amigosGatos"
const { amigos: amigosGatos } = gato.otros;
console.log(amigosGatos);
*/

/*
// EJEMPLO: "Destructuración DENTRO DE OTRA Destructuración". Osea, mediante destructuración accedo a la propiedad "otros" y destructuro "amigos".
const {
  otros: { amigos },
} = gato;
console.log(amigos);
*/

/*
// OTRO EJEMPLO: "Destructuración DENTRO DE OTRA Destructuración". Dentro del ALIAS (variable) llamado "amigosGatos", guardo el valor de la variable principal "amigos".
const {
  otros: { amigos: amigosGatos },
} = gato;
console.log(amigosGatos);
*/

/*
// LA MEJOR OPCIÓN DE HACERLO ES MEDIANTE LOS PUNTITOS:
const { amigos } = gato.otros;
console.log(amigos);
*/

/*
// Los valores de la propiedad array "amigos" perteneciente al objeto "gato", voy a guardarlos dentro del ALIAS "amigosArray.
const { amigos: amigosArray } = gato.otros;
// Lo de la linea 81, es lo mismo que hacer:    const amigosArray = ["Cobarde", "Timido"];
//es lo mismo que crear una nueva constante con el nombre "amigosArray" y guardar los mismos valores de la propiedad "amigos" perteneciente al objeto "gato".

// Los valores que voy a destructurar, se guardan en nuevas variables respetando el orden de los índices.
const [amigoUno, amigoDos] = amigosArray; // Se puede desestructurar la cantidad que querramos.

console.log(amigoDos);
*/

const amigosArray = ["cobarde", "Timido", "Pegajoso"];
const [aUno, aDos, aTres, aCuatro = "no existe"] = amigosArray; // Al igual que en los objetos, a los array puedo asignarles un valor por defecto. En este caso, como "aCuatro" no tiene un valor, se lo asigno por defecto. Por lo que, quedaría:   aCuatro = "no existe";
console.log(aCuatro);
