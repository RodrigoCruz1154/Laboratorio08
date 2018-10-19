
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar acá el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");

/*¿Qué contiene la variable formulario? Contiene un arreglo.*/

/*¿Qué hace el método evt.preventDefault()? Determina si este método a sido llamado por algún otro evento encadenado a éste.*/

/* ¿Qué es lo que contiene formulario[x]? Tiene un formulario con todos su atributos: La fecha, la descripción y la cantidad*/

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr"); 
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td"); 
        let content = document.createTextNode(item); 
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td); 
    }); 
    tbody.appendChild(tr); 
}

/*¿Qué contienen las variables tr y td ? Contienen nodos */
/* ¿Qué contienen la variable content ? Un nodo de texto */
/* ¿Qué valor tendra tbody al finalizar la iteración? Tendrá el texto ingresado */
/* Describa en pocas palabras lo que realizara esta función: Creará un nodo de un elemento. */

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
/* ¿Qué es lo que hace .firstChild? Hará énfasis en cada uno de los primeros hijos de un nodo. */
/* Después de realizar el while ¿Comó quedara el elemento tbody ? Sin el primer hijo. */

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/* ¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent? Una colección de nodos hijos como un objeto lista de nodos. */

const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 

   /* ¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? Obtenemos el primer elemento que coincida con el valor que hemos puesto.*/
   /*  ¿Qué hace el método childElementCount? Devuelve un número del tipo "unsigned long" que representa la cantidad de elementos hijo que penden del elemento padre.*/
   /* ¿Qué se mostrará en pantalla cuando se ejecute la función agregar()? El elemento escrito en el formulario (fecha, descripción y cantidad) */
   /*¿Qué se mostrara en el navegador después de ejecutar la función mostrar? Mostrará lo que haga la función agregar()*/

