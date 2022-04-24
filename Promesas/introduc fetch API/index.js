/////////// Ejemplo original de consumir API externa  ///////////
/*
const url = "https://jsonplaceholder.typicode.com/posts/1";
// Al final del URL (después de la barra invertida), le pongo el número 1 para que solo me muestre el objeto con ID 1.

// La respuesta que viene en el URL está en formato JSON. Por lo tanto, cuando utilizo el "then", FORMATEO la respuesta (res) en formato JSON y lo retorno.
fetch(url)

// Formateo la res a JSON.
  .then((res) => res.json()) 
  
// Con este "then", pinto data (la respuesta) por consola.
  .then((data) => console.log(data)) 
  
 // Pinta el error en consola.
  .catch((e) => console.log(e))
  
  .finally(() => console.log("Finalizó"));

////// OTRA FORMA, PERO CON "TRY y CATCH" //////
  const findPostById = async (id) => {
  try {
    // Espero primero la respuesta de la URL
    const res = await fetch(url);

    // Formateo la respuesta en formato JSON
    const post = await res.json();

    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

findPostById();
*/

/////// OTRO EJEMPLO DE CONSUMIR API EXTERNA ///////
const url = "https://jsonplaceholder.typicode.com/posts/";

const findPostById = async (id) => {
  try {
    // Espero primero la respuesta de la URL y le concateno el ID
    const res = await fetch(url + id);

    //----------------------------------------//
    // OTRA FORMA es NO CREAR la variable URL de la linea 39 y colocar el "url" de la API externa dentro del FETCH y concatenarlo con el ID.
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    //----------------------------------------//

    // Formateo la respuesta en formato JSON
    const post = await res.json();

    console.log(post);
  } catch (error) {
    console.log(error);
  }
};
// Invoco a la función y le paso por parámetro el número del ID que quiero obtener.
findPostById(2);
