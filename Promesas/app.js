/////////////// PROMESAS ///////////////

////// Simulación de una API con un ARRAY de objetos //////
const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

/*
const findPostById = (id, callback) => {
  // Un callback, es una función que se basa como argumento a otra función.
  const post = posts.find((item) => item.id === id); // Busco el POST de acuerdo a un ID. Si se cumple la condición, devuelve TRUE, sino, FALSE.

  if (post) {
    // si el ID existe, como error no le pongo nada (o sea, le pongo NULL) y, como segundo parámetro, le mando el POST en específico.
    // callback: 
    // primer argumento (null), es la respuesta de ERROR.
    // segundo argumento (post), es la respuesta de ÉXITO.
    
    callback(null, post);

    // el primer parámetro es el ERROR y, el segundo parámetro, es el POST.
  } 
  else {
    // En caso de error, el NULL que se encuentra en el callback del IF, lo reemplazo por un mensaje de error mediante un string.
    callback("No se encontró el post con id " + id);
  }
};

// Esta es la INVOCACIÓN de la función de arriba.
// El primer parámetro, es el ID del objeto del array que quiero buscar, y el segundo parámetro "(err, post)", es el callback.
// Esta es una forma "exagerada" de hacerlo, se llama: "El infierno (hell) de los callbacks". Casi nunca se hacen callbacks reiterativos como la del siguiente ejemplo:
findPostById(1, (err, post) => {
  if (err) {
    // Si existe el ERROR, lo retorno.
    return console.log(err);
  }
  console.log(post); // Este caso sería un ELSE que dice: "Sino, si existe el POST, lo retorno".

  findPostById(2, (err, post) => {
    if (err) {
      console.log(err);
    }
    console.log(post);

    findPostById(3, (err, post) => {
      if (err) {
        console.log(err);
      }
      console.log(post);

      findPostById(4, (err, post) => {
        if (err) {
          console.log(err);
        }
        console.log(post);
      });
    });
  });
});
*/

/*
// Para EVITAR el ejemplo anterior: "infierno (hell) de los callbacks", se crearon las "PROMESAS (promises)":
// La función, recibe el "id" que quiero buscar
const findPostById = (id) => {
  const post = posts.find((item) => item.id === id);
  // Si se cumple la condición, va a devolver TRUE

  return new Promise((resolve, reject) => {
    // Usualmente, se pone "resolve y reject", pero como son parámetros, puedo poner los nombres que yo quiera.
    // resolve: es la respuesta SATISFACTORIA.
    // reject: es la respuesta NEGATIVA (error).
    if (post) {
      // Si "post" es TRUE, gracias a "resolve", va a devolver el valor (OBJETO) del ID buscado.
      resolve(post);
    } else {
      reject("No se encontró id " + id);
    }
  });
};
*/

/*
// También funciona de la siguiente forma:
const findPostById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Con el "setTimeout", hago que se demore 2 segundos en ejecutarse la función que está dentro de ella.
      const post = posts.find((item) => item.id === id);
      if (post) {
        resolve(post);
      } else {
        reject("No se encontró el id " + id);
      }
    }, 2000);
  });
// Con las promesas, nuestro código empieza a ser ASÍNCRONO, ya que, por más que la promesa tarde su ejecución, se sigue ejecutando la otra parte del código de forma paralela.


// El ".then()" le dice: "TRAEME LA RESPUESTA SATISFACTORIA" de esa PROMESA y después vamos a ver la respuesta NEGATIVA (error).
// Al final el "then()", no hay que poner ';' porque sino, indica que ahí termina la línea de código y no va a continuar para poder ejecutarse el "catch()" que sirve para retornar el error.
findPostById(2)
  .then((post) => console.log(post))
  .catch((e) => console.log(e));
// el ".catch()" recibe el ERROR y va a retornar el mensaje de error que se encuentra dentro del reject("No se encontró id " + id);
*/
// El siguiente código, hace una SIMULACIÓN de que consumimos algo externo:
const findPostById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Con el "setTimeout", hago que se demore 2 segundos en ejecutarse la función que está dentro de ella.
      const post = posts.find((item) => item.id === id);
      if (post) {
        resolve(post);
      } else {
        reject("No se encontró el id " + id);
      }
    }, 2000);
  });
/* 
///////// IMPORTANTE /////////
* Para el "await", SI O SI, necesitamos utilizar una función "async".
El "async", puede funcionar solo. En cambio, el "await" no puede funcionar sin un "async".
*/
/*
const buscar = async (id) => {
  // Acá espero que mi PROMESA (Promise) se ejecute.
  // Cuando tenga una respuesta (en este caso, el POST proveniente de la Promise), se la mando a la variable POST creada en la siguiente linea:
  const post = await findPostById(id); // Con "await", espero la promesa (Promise).
  // Para poder usar la palabra reservada AWAIT, siempre tiene que estar dentro de un ASYNC. En cambio, el ASYNC, puede estar solo sin el AWAIT.
  console.log(post);
};

buscar(2);

console.log("fin del código"); // "Este console.log", por más que esté a lo último, se ejecuta primero, dado que la PROMESA, tiene un retardo de 2 segundos gracias al "setTimeout". Por eso, digo que es ASÍNCRONO, ya que primero se va a ejecutar el CONSOLE.LOG y, por último, la PROMESA de forma paralela.
*/

/*
/////////  TRY and CATCH /////////
const buscar = async (id) => {
  try {
    // Intenta hacer lo que está dentro del siguiente bloque:
    const post = await findPostById(id);
    console.log(post);
  } catch (error) {
    // En caso de que FALLARA lo que intentó hacer en el bloque del "try", ejecutame el error del "catch". Si, lo que se envía a la promesa es un "reject", automaticamente se va a ejecutar el error del CATCH.
    console.log(error);
  } finally {
    // Independientemente de la ejecución del TRY y CATCH, el FINALLY va a ejecutar un código al final.
    console.log(
      "Se ejecuta SI O SI al final, independientemente si la respuesta es SATISFACTORIA o NEGATIVA."
    );
  }
};
buscar(2);
console.log("Fin del código");
*/

///////// TRY and CATCH con MULTIPLES promesas /////////
const buscar = async () => {
  try {
    // Si quiero buscar 2 o más promesas, NO es recomendable hacer lo siguiente:
    // const postUno = await findPostById(1);
    // const postDos = await findPostById(2);

    //Por eso, lo RECOMENDABLE es hacer un "Promise.all" que guarda las promesas en un ARRAY:
    const resPosts = await Promise.all([findPostById(1), findPostById(2)]);
    // Hay que tener mucho cuidado con el "Promise.all" porque solamente se va a ejecutar y enviar una respuesta, SIEMPRE Y CUANDO, sea satisfactorio todo lo que está dentro de ella. En este caso, "findPostById(1), findPostById(2)" son satisfactorios porque sus ID (1 Y 2) pertenecen a los objetos del array POSTS. O sea, que si uno solo falla, va a saltar directamente al CATCH.

    console.log(
      `ID 1, TITLE: ${resPosts[0].title} \n\n ID 2, TITLE: ${resPosts[1].title} `
    );
  } catch (error) {
    console.log(error);
  } finally {
    console.log(
      "Se ejecuta SI O SI al final, independientemente si la respuesta es SATISFACTORIA o NEGATIVA."
    );
  }
};
buscar();
console.log("Fin del código");

/*
// También, puedo tener el infierno (hell) de las promesas:
findPostById(1)
  .then((post) => {
    console.log(post);
    return findPostById(2);
  })
  .then((post) => {
    console.log(post);
    return findPostById(3);
  })
  .then((post) => {
    console.log(post);
    return findPostById(4);
  })
  .catch((e) => console.log(e));
////////////////////////////////////////
*/
