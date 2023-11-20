let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".es", ".us", ".en", ".com"];
let domain = ["us"];

function generarDominio() {
  //Array vacía
  let domainNames = [];

  //Recorro los pronombres
  for (let p of pronoun) {
    //Recorro los adjetivos
    for (let a of adj) {
      //Recorro los nombres
      for (let n of noun) {
        //Recorro las extensiones
        for (let e of extensions) {
          //Concateno el resultado en una variable
          let domainName = p + a + n + e;
          //Añado la concatenación al array vacío
          domainNames.push(domainName);
        }

        //Recorro los domain hacks
        for (let h of domain) {
          //La misma concatenación que antes quitando la extensión y añadiendo el domain hack
          let domainHack = p + a + n + h;
          //Añado la concatenación al array vacío
          domainNames.push(domainHack);
        }
      }
    }
  }

  //Devuelvo el array
  return domainNames;
}

//Función para generar dominios
function crearLista() {
  //Guardo la función en una variable
  let generatedDomains = generarDominio();
  //Esta variable me serviá para crear un espacio para cada dominio asociandola con un id
  let domainList = document.getElementById("domainList");
  domainList.innerHTML = "";

  //Recorro los dominios
  generatedDomains.forEach(domain => {
    //Guardo en una variable cada item de la lista, y con createElement hago que cada elemento sea una etiqueta <li>
    let listItem = document.createElement("li");
    //Guardo el contenido del texto de la lista
    listItem.textContent = domain;
    //Usando el id de domainList que utilicé para crear los espacios de la lista, con appenChild hago que el contenido de estos espacios sean los
    //<li> que he creado antes
    domainList.appendChild(listItem);
  });
}

// Evento click para el botón
document.getElementById("generateButton").addEventListener("click", crearLista);
