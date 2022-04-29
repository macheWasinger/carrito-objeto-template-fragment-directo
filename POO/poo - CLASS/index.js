/*
/////////////////  CLASS /////////////////
// Al nombre de la función SIEMPRE le pongo la primer letra en mayúscula para indicar que es una FUNCIÓN CONSTRUCTORA.

// IMPORTANTE: la VENTAJA que da usar "class" es que, al crear los objetos mediante instancias fuera del constructor (como por ejemplo, "juanito" y "mache"), no se les agrega automáticamente el método "saludar()" a cada una de las instancias y NO se saturan.

// Palabra reservada "class"
class Persona {
  // Palabra reservada "constructor". Esta palabra reservada construye las propiedades.
  constructor(nombre) {
    this.nombre = nombre;
  }

  /////// GET and SETTER ///////
  // Palabra reservada "get"
  get getNombre() {
    return this.nombre;
  }

  // Palabra reservada "set"
  set setNombre(nombre) {
    this.nombre = nombre;
  }

  // Dentro del objeto NO se puede crear ARROW FUNCTION como método/propiedad.
  saludar() {
    return `${this.nombre} dice hola`;
  }
}

const juanito = new Persona("juanito");
console.log(juanito); // Imprimo el objeto completo.

const mache = new Persona("Mache");
console.log(mache.getNombre); // Para imprimir el método "getNombre", no hay que ponerle los paréntesis.

mache.setNombre = "Eugenio"; // Al "setNombre", no hay que ponerle los paréntesis y le doy el nuevo valor a la variable "mache". Entonces, la variable "mache", ahora va a tener el valor "eugenio".

console.log(mache.saludar()); // Del objeto "mache", imprimo el método "saludar()" que se encuentra guardado en la cadena de prototipos gracias al "class".
///////////////////////////////////////////////////
*/

//----------------- STATIC -----------------//
/*
// La palabra clave "static" define un método estático para una clase. Los métodos estáticos son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase. Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.
class Persona {
  static probarSaludo(nombre) {
    return `${nombre} está saludando`;
  }
}
console.log(Persona.probarSaludo("Titi"));
*/
//------------------------------------------//

/*
//////////////// HEREDAR ////////////////
// La palabra clave "extends" es usada en declaraciones de clase o expresiones de clase para crear una clase hija.
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `${this.nombre} está saludando.`;
  }

  static probarSaludo(nombre) {
    return `${nombre} está saludando.`;
  }
}

// La nueva plantilla "Estudiante", hereda toda la plantilla de "Persona". O sea, que hereda los valores que les doy a los parámetros "nombre" y "edad".
class Estudiante extends Persona {
  // Creo un parámetro de tipo ARRAY vacío llamado "notas"
  constructor(nombre, edad, notas = []) {
    // Con el "super", puedo heredar los parámetros "nombre" y "edad" de la clase padre "Personas".
    super(nombre, edad);
    this.notas = notas;
  }

  set setNotas(nota) {
    this.notas.push(nota); // Con el "push()" le paso notas al array vacío .
  }

  get getNotas() {
    return this.notas;
  }

  saludar() {
    // Acá se produce el famoso "polimorfismo", ya que se va a sobreescribir los datos que devuelve el "return" del método "saludar()" de la clase PADRE (Persona) por los datos del siguiente return que pertenece al método "saludar()" de la clase HIJO "Estudiante".
    return `${this.nombre} desde estudiante.`;
  }
}

// Le paso un nuevo parámetro llamado "notas" en formato array vacío. Pero en este caso, no voy pasarle valor al array porque se lo voy a pasar mediante el "setNotas" creado en la clase "Estudiante".
const juanito = new Estudiante("Juanito", 25);

// Le paso valores al array vacío "notas" mediante el método "setNotas" sin usar paréntesis porque a los "get" y "set" tengo que llamarlos como si fueran propiedades.
juanito.setNotas = 7;
juanito.setNotas = 5;
juanito.setNotas = 1;

// console.log(juanito.saludar());
// Ejecuta el valor del nuevo método "saludar()" creado en la clase "Estudiante".

// Obtengo los datos que le pasé al array "notas" mediante los "setNotas" y los imprimo.
console.log(juanito.getNotas);
////////////////////////////////////////////
*/

//********** Private class fields **********//
// Las propiedades de la clase son públicas de forma predeterminada y se pueden examinar o modificar fuera de la clase. Sin embargo, existe una propuesta experimental para permitir la definición de campos de clase privados utilizando un prefijo HASH '#'.

// IMPORTANTE: JavaScript, del lado del Frontend es todo PÚBLICO.

// Al ser PRIVADO, no se va a ocultar. Solo sirve para NO poder acceder a ella y evitar que se choquen los códigos.

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `${this.nombre} está saludando.`;
  }

  static probarSaludo(nombre) {
    return `${nombre} está saludando.`;
  }
}

class Estudiante extends Persona {
  #notas = []; // con el '#', convierto al array en privado.

  set setNotas(nota) {
    this.#notas.push(nota); // Con el "push()" le paso notas al array vacío .
  }

  get getNotas() {
    return this.#notas;
  }
}

// Le paso un nuevo parámetro llamado "notas" en formato array vacío. Pero en este caso, no voy pasarle valor al array porque se lo voy a pasar mediante el "setNotas" creado en la clase "Estudiante".
const juanito = new Estudiante("Juanito", 25);

// Le paso valores al array privado "#notas" mediante el método "setNotas" sin usar paréntesis porque a los "get" y "set" tengo que llamarlos como si fueran propiedades.
juanito.setNotas = 7;
juanito.setNotas = 5;
juanito.setNotas = 1;

// console.log(juanito.saludar());
// Ejecuta el valor del nuevo método "saludar()" creado en la clase "Estudiante".

// Mediante "getNotas", obtengo los datos que le pasé al array privado "#notas", y los imprimo.
console.log(juanito.getNotas);
//*****************************************//
