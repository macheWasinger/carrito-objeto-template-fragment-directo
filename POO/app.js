// Funcion constructora = Plantilla = Class
// Esta es una FUNCIÓN CONSTRUCTORA que construye (en este caso) "OBJETOS":
function Persona(nombre) {
  // this.nombre, va a ser igual a lo que le pasemos como nombre.
  this.nombre = nombre;

  this.saludar = function () {
    return `${this.nombre} dice hola.`;
  };

  // Este método no me sirve porque si tengo un listado de X personas instanciadas, todos los objetos van a tener el método "saludarIngles()" como propiedad y capaz que varias personas no saben inglés.
  // this.saludarIngles = function () {
  //   return `${this.nombre} says hi!`;
  // };
}

//Los PROTOTIPOS son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.

// Creo el método "saludarIngles()" pero en formato "prototipo" para que, NO se les incluya como propiedad a todos los objetos personas. Por lo cual, si queremos añadirle ese método a ciertas personas, lo llamo como un PROTOTIPO. O sea, la gran diferencia con el método anterior "saludarIngles()" es que, gracias al "prototype", al instanciar los objetos, no se les pasa automáticamente y yo lo llamo mediante la cadena de prototipos.
Persona.prototype.saludarIngles = function () {
  return `${this.nombre} says hi!`;
};

// Solo utilizando la propiedad "this.nombre", puedo reutilizar el código para agregar más personas.
// La función constructora, crea una plantilla para poder construir diferentes objetos (en este caso, objetos personas).

// El siguiente código se llama "instanciar" porque uso la palabra "new". Lo que hace "new" es crear un nuevo objeto a través de la plantilla (función constructora) creada al principio del código. Por lo tanto, los objetos creados son "juanito y pedrito", y estos son nuevas "instancias":
const juanito = new Persona("Juanito");
const pedrito = new Persona("Pedrito");

// Imprimo en consola a los objetos "juanito y pedrito":
console.log(juanito);
console.log(pedrito);

// Imprimo en consola al método "saludar()" perteneciente a la función constructora:
console.log(juanito.saludar());

// Imprimo en consola al método "saludarIngles()" de formato PROTOTIPO que creé FUERA de la función constructora:
console.log(pedrito.saludarIngles());
