const alert = document.querySelector(".alert");
const formulario = document.querySelector("#formulario");
const pintarTodo = document.querySelector("#pintarTodo");
const templateTodo = document.querySelector("#templateTodo").content;

let todos = [];

const agregarTodo = (todo) => {
  const objetoTodo = {
    nombre: todo,

    // El método "Date.now()" devuelve los milisegundos transcurridos desde las 00:00:00 UTC del 1 de enero de 1970 justo hasta la fecha actual como un "Number".
    id: `${Date.now()}`, // Va a retornar un ID con el número obtenido en milisegundos en formato string.
  };

  todos.push(objetoTodo);
};

const pintarTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));

  // Esto se aplica cuando vamos a pintar un contenido dinámico, vamos a borrarlo y sobreescribirlo. O sea, para cuando se pinte más de una vez.
  pintarTodo.textContent = "";

  const fragment = document.createDocumentFragment();

  todos.forEach((item) => {
    const clone = templateTodo.cloneNode(true);
    clone.querySelector("p").textContent = item.nombre;

    // Con el "data", quiere decir que se está manipulando algo con JavaScript.
    clone.querySelector(".btn-danger").dataset.idObjeto = item.id; // Con "dataset.id", obtengo el "id" del item que recorre el array "todos" mediante el forEach. Por eso, dentro del objeto "objetoTodo", convertí el ID a "string", ya que "dataset", solamente guarda STRING.

    fragment.appendChild(clone);
  });

  pintarTodo.appendChild(fragment);
};

document.addEventListener("click", (e) => {
  // Si hago CLICK en el botón BORRAR que tiene la clase ".btn-danger", va a devolver TRUE. Entonces, el condicional IF dice: SÍ ES TRUE?, EJECUTÁ LO SIGUIENTE:
  if (e.target.matches(".btn-danger")) {
    // Solo va a devolver los elementos que sus ID no sea igual al ID del evento del botón BORRAR que obtengo mediante el CliCk.
    todos = todos.filter((item) => item.id !== e.target.dataset.idObjeto); // "e.target.dataset.idObjeto",
    // Devuelve un ARRAY llamado "todos" con todos los elementos filtrados.

    pintarTodos();
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Cuando hago click en el botón AGREGAR, al enviarse los datos (gracias al "submit"), le vuelve a AGREGAR la clase "d-none" a la etiqueta SECTION del "alert" así se OCULTA.
  alert.classList.add("d-none");

  // Con el "FormData", puedo capturar todos los input que hayan dentro del formulario gracias al atributo "name". Por lo cual, es más efectivo que capturar los input por su ID.
  const data = new FormData(formulario);

  // Esto me devuelve un array de los elementos (valores) que contengan los inputs. O sea, CAPTURA el "Todo" que enviamos por el input.
  const [todo] = [...data.values()];

  // Al negar el "trim()", me devuelve TRUE en caso de que no haya un STRING en el interior del input. O sea, sería cuando el usuario no ingresa ningún caracter por el input y lo quiere enviar.
  if (!todo.trim()) {
    // Cuando el usuario hace click en el botón AGREGAR intentando enviar un formulario vacío, se ELIMINA la clase "d-none" de la etiqueta SECTION del "alert" así APARECE en pantalla el cartel de advertencia.
    alert.classList.remove("d-none");

    // Hago un "return" para que salga del condicional IF y no siga con el código. Por lo cual, no va a seguir ejecutándose el "addEventListener" y nunca va a llegar ejecutarse el arrow function "agregarTodo"
    return;
  }

  agregarTodo(todo);
  pintarTodos();
});

// El evento se ACTIVA cuando se CARGA el DOM.
document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("todos")) {
    // Si existe el array, lo capturo mediante su KEY (llave) llamado "todos".

    // Viene en formato STRING porque, anteriormente, lo había convertido en STRING mediante el JSON.stringify(). Entonces, ahora lo vuelvo a convertir en tipo ARRAY con "JSON.parse()".
    todos = JSON.parse(localStorage.getItem("todos"));

    pintarTodos();
  }
});
