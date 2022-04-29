const formulario = document.querySelector("#formulario");
const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const cardsProfesores = document.querySelector("#cardsProfesores");
const templateEstudiante = document.querySelector(
  "#templateEstudiante"
).content;
const templateProfesor = document.querySelector("#templateProfesor").content;

// Dentro del array vacío, se van a guardar todos los Estudiantes.
const estudiantes = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Uso el "name" y NO el "id" porque lo voy a capturar por "FormData". Y el FormData recibe el name como parámetro en su constructor.
  const datos = new FormData(formulario); // Recibe el ID del formulario.

  // Mediante este ejemplo,imprimo cada valor ingresado en las etiquetas "input y select", gracias al atributo "name" perteneciente en cada una de las etiquetas.
  //   datos.forEach((item) => console.log(item));

  // Gracias al DESTRUCTURING y al método "values()", puedo obtener un array con los valores ingresados en las etiquetas "input y select":
  const [nombre, edad, opcion] = [...datos.values()];
  // Con DESTRUCTURING, lo que hago es obtener los valores ingresados en los inputs y en el select, guardarlos en un array de manera ordenada, y pasarle cada valor a cada variable de tipo constante creada. Por ejemplo: El primer valor es el nombre proveniente del INPUT y lo guardo dentro de la primer variable llamada "nombre", el segundo valor es la edad proveniente del INPUT y lo guardo dentro de la segunda variable llamada "edad" y, el tercer valor es la opcion proveniente del SELECT, y lo guardo dentro de la tercer variable llamada "opcion".

  if (opcion === "Estudiante") {
    // "Estudiante" es el valor del atributo "value" de la etiqueta OPTION del HTML.

    const estudiante = new Estudiante(nombre, edad);
    estudiantes.push(estudiante);
  }

  if (opcion === "Profesor") {
    console.log("profesor");
  }
});

// Creo un constructor de Persona para poder usarlo con el Estudiante y el Profesor, ya que, ambos tienen en común el "nombre" y la "edad".
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Usualmente se pone UI cuando enviamos algo al HTML.
  // Creo el parámetro "persona" porque va a ser la instancia de "Estudiante" y también pongo "tipo" para saber si es un tipo Estudiante o un tipo Profesor.
  static pintarPersonaUI(persona, tipo) {
    if (tipo === "Estudiante") {
      cardsEstudiantes.textContent = "";
      const fragment = document.createDocumentFragment();

      personas.forEach((item) => {
        // Como "item" recorre el array "personas", le aplico el método "agregarNuevoEstudiante()" como un prototype.
        fragment.appendChild(item.agregarNuevoEstudiante());
      });

      cardsEstudiantes.appendChild(fragment);
    }
  }
}

class Estudiante extends Persona {
  #estado = false;
  #estudiante = "Estudiante";

  set setEstado(estado) {
    this.#estado = estado;
  }

  get getEstudiante() {
    return this.#estudiante;
  }

  agregarNuevoEstudiante() {
    const clone = templateEstudiante.cloneNode(true);
    clone.querySelector("h5 .text-primary").textContent = this.nombre;

    return clone;
  }
}

class Professor extends Persona {}
