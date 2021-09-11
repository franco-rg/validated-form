// const titulo = document.querySelector(".titulo");
// titulo.setAttribute("contenteditable","true");
// titulo.setAttribute("dir","rtl");
// titulo.setAttribute("hidden", "false"); 

// const exm = document.querySelector(".text-example");
// exm.setAttribute("title","3");

// document.querySelector(".input-css").setAttribute("type","color");


// const input = document.querySelector(".input--normal");

// document.write(input.type = "range");


// Filtrar carga y formato de archivos
// const file_i = document.querySelector(".input--file");
// file_i.accept = "image/jpg";

// form
// const limitador = document.querySelector(".text_i");
// limitador.maxLength = 4; 


// const requerido = document.querySelector(".text_i");
// requerido.required = "true";

// const titulo = document.querySelector(".titulo");
// titulo.style.color = "white";
// titulo.style.letterSpacing = "4px";
// titulo.style.padding = "20px"
// titulo.style.textAlign = "center";
// titulo.style.width = "35%";
// titulo.style.borderRadius = "50px";
// titulo.style.backgroundColor = "#96f";

// titulo.classList.add("azul");
// titulo.classList.toggle(".titulo")
// titulo.classList.replace("titulo","jaja");


// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement("LI");

// const textItem = document.createTextNode("Este es un texto");
// item.appendChild(textItem);

// console.log(item);

// const contenedor = document.querySelector(".contenedor");

// // const primerhijo = contenedor.firstElementChild;
// // console.log(primerhijo);

// // const hijos = contenedor.childNodes;
// // console.log(hijos);

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");

// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo,h2_antiguo);


// // let saludo = prompt("Ingresa tu nombre");
// // document.write(`Hola! <b> ${saludo} </b>`);


// // if(saludo == null){
// //     document.write("Sin parametros");
// // }else if(saludo = " "){
// //     document.write("Valor Vacio")
// // }else{
// //     document.write(saludo);
// // }

// let numero1 = "hola";
// let numero2 = " Maria";
// let numero3 = ", ¿Como estas?"

// // de esta manera podemos forzar al programa para que
// // tome numeros y concatene en vez de sumar valres...
// // respuesta = document.write("" + numero1 + numero2);

// respuesta = numero1.concat(numero2).concat(numero3);
// document.write(respuesta);
// document.write(`<br>`);

// if (numero1 == numero2 && numero2 == numero2){
//     document.write("Almenos uno de los valores son iguales");
// }else if(numero2 != numero3){
//     document.write("Son valores distintos");
// }

// document.write(`<br>`)

// let container = [];

// // Arrays
// // container = [1,2,3,4,5,6, "hola"];
// // document.write(container[8]) // obtenemos valores de una determinanada posicion

// // if (container == "undefined"){
// //     document.write(" El valor no esta definido");
// // }

// // Los arrays deben estar dentro de [] <--- corchetes
// // y deben estar separados entre (,) <--- comas

// // los datos que no estan definidos nos muestra undefined

// // Arrays Asociativos
// // pc = {
// //     nombre: "hp",
// //     color: "negro"
// // }

// // let desktop = pc

// // document.write(desktop[1]);


// // let number1 = 1;

// // do{
// //     number1++;
// //     document.write(`<br> ${number1}`);
// // }while(number1 < 10);

// // let numeros = [10,15,20,25];

// // forFranco:
// // for (numerito in numeros){
// //     document.write(`Vuelta: ${numerito} <br>`)
// // }

// // const solicitud()=>{
// //     let nommbre = prompt("Ingrese su Nombre");
// //     document.write(`<b>Nombre Ingresado: </b>${nommbre}`)
// // }

// // const saludo = (nombre) =>{
// //     document.write(`Hola <b>${nombre}!</b>, bienvenido :D`);
// // }

// // saludo(prompt("Ingrese Nombre:"));



// // class carro{
// //     constructor(marca,color,carroceria,year,vm){
// //         this.marca = marca;
// //         this.color = color;
// //         this.carroceria = carroceria;
// //         this.year = year;
// //         this.vm = vm
// //     }
// // }

// // const car_one = new carro("nissan","plata","sedan",2000,"80km");
// // document.write(car_one);


// // let cadena1 = "jaja ";
// // // let cadena2 = prompt("Ingrese Nombre de usuario");

// // let resultado = cadena1.padEnd(11,"Hola");

// // document.write(resultado);


// // -------------------
// // METODOS DE CADENA

// let cadena_one = "hola"
// let cadena_two = "Franco Daniel hola"

// // nos separa la cadena, devolviendo un array.
// resultado1 = cadena_two.split(" ");

// // nos muestra el valor del rango que le indiquemos.
// resultado2 = cadena_two.substring(0,5);

// // convienrte toda la cadena en minuscula
// resultado3 = cadena_two.toLowerCase();

// // convierte toda la cadena de texto a mayuscula.
// resultado4 = cadena_two.toUpperCase();

// resultado5 = cadena_two.trim();

// // METODOS DE BUSQUEDA Y COMPARACION

// // compara cadenas y busca similitud entre ellas / 
// // devuelve valores booleanos / true - false
// resultado6 = cadena_two.includes("cadena_one");

// // Compara cadenas para ver si comienzan iguales /
// // devuelven valores booleanos / true - false
// resultado7 = cadena_two.startsWith("Franco");

// // compara cadenas y determina si es que terminan 
// // iguales / devuelven valores booleanos / true - false
// resultado8 = cadena_two.endsWith("la");

// // este metodo nos repite la cadena, 
// // la cantidad de veces que le indiquemos.
// resultado9 = cadena_two.repeat(8);

// // este metodo recibe dos parametros
// // el primero es cuanto medira la cadena de texto
// // el segundo es con que queremos que se rellene la cadena
// // a la cual aplicamos el metodo.
// resultado10 = cadena_two.padEnd(100, " jeje");

// // es lo mismo que (padEnd), pero este rellena al inicio de
// // la cadena, recibe dos parametros / 
// // primero: logintud de cadena de texto
// // segundo: cadena que rellenará
// resulado11 = cadena_two.padStart(100, " jaja");

// // trimEnd(); ---> elimina espacios en blanco que se encuentren
//                     // al final de la cadena
// // trimStart(); ---> elimina espacios en blanco que se encuentren
//                     // al inicio de la cadena

// document.write(resultado1 + "<br>");
// document.write(resultado2 + "<br>");
// document.write(resultado3 + "<br>");
// document.write(resultado4 + "<br>");
// document.write(resultado5 + "<br>");
// document.write(resultado6 + "<br>");
// document.write(resultado7 + "<br>");
// document.write(resultado8 + "<br>");
// document.write(resultado9 + "<br>");
// document.write(resultado10 + "<br>");
// document.write(resulado11 + "<br>");


// document.write("----------------" + "<br>");
// document.write("METODOS DE ARRAYS" + "<br>");

// // ----------------------
// // METODOS DE ARRAYS

// // Array General
// array = ["hola", 45, "Franco", "Numeros"]


// // Metodos

// // pop() ---> elimina el ultimo elemento de un array
// // devuelve revelando lo que eliminó
// array1 = array.pop();

// // shift() ---> elimina el primer elemento de un array.
// // devuelve revelando lo que eliminó.
// array2 = array.shift();

// // agrega elementos al final del array y nos devuelve su posicion.
// // recibe parametros los cuales son los elementos que vamos a agregar.
// array3 = array.push("Anne", "Joselyn");

// // invierte la poscion de los elemntos de un array
// // no recibe parametros
// // array4 = array.reverse();

// // agrega elementos al inicio de un array
// // nos devuelve la posicion inicial de estos
// // recibe parametros, los cuales son los elementos que vamos a agregar
// array5 = array.unshift(4,6,5);

// // ordena los elementos del array
// // numericamente y alfabeticamente
// // no recibe parametros
// array6 = array.sort();

// // metodo que elimina elementos entre el ranfo que le indiquemos
// // reemplazandolos por el elemento que definamos en el parametro del metodo
// // recibe dos parametros:
// // primer parametro: rango de elementos a eliminar.
// // segundo parametro: elemento a reemplazar por eliminados.
// array7 = array.splice(1, 3, "Estefano");

// // IMPRESIONES
// document.write(array1 + "<br>");
// document.write(array2 + "<br>");
// document.write(array3 + "<br>");
// // document.write(array4 + "<br>");
// document.write(array + "<br>");
// document.write(array + "<br>");
// document.write(array7 + "<br>");

// // Objeto Math
// // METODOS NUMERICOS

// // Ah todos los metodos tenemos que colocar el objeto
// // Math al principio de estos mismos.

// // Definicion
// let numero_gen = 10;

// // Raiz cuadrada de...
// let num_result = Math.sqrt(numero_gen);

// // Raiz cubica de...
// let num_result1 = Math.cbrt(numero_gen);

// // nos muestra el numero mas grande entre los numeros
// // parametricos que le demos.
// let num_result2 = Math.max(10,80,96,15,95);

// // nos muestra el numero minimo entre la lista del parametro
// let num_result3 = Math.min(10,80,96,15,95);

// // Ramdom por defecto nos muestra numeros aleatorios entre el 0 al 1
// // pero nosotros podemos especificarle entre que rango queremos la aleatoriedad
// // este numero, podemos convertirlo a entero con el metodo -Math.round();-

// let num_result4 = Math.random() * 100;

// // el metodo round(); redondea de forma legal un nhmero decimal
// // es decir, si un numero es 9.3 ---> lo redonde a 9
// // pero si un numero pasa el .5, osea 9.8 ----> lo redondea a 10
// num_result4 = Math.round(num_result4);  

// // trumc();
// // este metodo elimina los decimales de un numero, y solo 
// // conserva el entero, mas no considera el redondeo.

// // impresion
// document.write(num_result + "<br>");
// document.write(num_result1 + "<br>");
// document.write(num_result2 + "<br>");
// document.write(num_result3 + "<br>");
// document.write(num_result4 + "<br>");


// // CAPITULO 05
// // Consola
// console.log("chismesito");


// // lo que hace es ver si la afirmacion es verdad o no
// // si no es verdad, nos muestra un mensaje de error en consola
// console.assert(10 * 10 == 100);

// // esto limpia todo lo que ternga la consola en ese momento.
// console.clear();

// // nos muestra un error el cual sera el parametro o 
// // mensaje que le indiquemos dentro de los parentesis.
// console.error("Error");

// // esto nos muestra un mensaje como informacion, muy parecido 
// // a lo que hace -console.log();-
// console.info("Informacion");

// // este metodo de consola nos muestra una tabla de acuerdo al array
// // que nosotros le indiquemos en los parametros.
// console.table([12,45,85,90,72,61,83]); 

// // esto nos muestra un mensaje en forma de advertencia
// console.warn("Advertencia");

// // CONSOLE ---- FUNCIONES DE CONTEO 

// // count --> registra el numero de veces que se llama al metodo
// console.count();
// console.count();

// // reseta el contador que iniciamos
// console.countReset();

// // FUNCIONES DE AGRUPACION
// // Estos metodos agrupan todos los 

// // lo que hacemos aqui es abrir un grupo en donde todo el codigo
// // ... que hagamos va estar sometido o dentro de este grupo.
// console.group();

// // lo que hacemos aqui es eliminar el ultimo grupo en linea
// // (finalizarlo)
// console.groupEnd();


// // lo mismo que cuando creamos el group(); con la diferencia
// // que este, crea el grupo cerrado
// console.groupCollapsed();

// console.groupEnd();
// console.groupEnd();

// // FUNCIONES DE TEMPORIZACION

// console.clear();

// // asi inicializamos un contador
// console.time(); 

// // "punto de pausa"
// console.timeLog();

// // detenemos el cronometro y imprimos el tiempo de duracion 
// // desde que este inicio.
// console.timeEnd();

// // DOM
// // Tipos de Nodos
// // document ---> es el que abarca a todos los nodos

// // element ---> todas las que son etiquetas html
//         // ... nodo de tipo elementos

// // METODOS DE SELECCION DE ELEMENTOS

// // con este metodo seleccionamos un id del doc html
// document.getElementById("#class");

// // con esto seleccionamos una etiqueta que se encuentre dentro del html.
// document.getElementsByTagName("H4");

// // con esto seleccionamos los elementos de cualquier selector <html>
// document.querySelector(".contenedor")

// // seleccionamos todos los elementos que tengan el selector que
// // nosotros estemos seleccionando.
// document.querySelectorAll(".contenedor");

// // METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS

// // esto es para modificar el valor de un atributo o agregar uno nuevo
// // METODO: .setAttribute("atributo","valor");
// document.querySelector(".contenedor").setAttribute("hola","carro");

// // con esto podemos obtener el valor de un atributo
// // METODO: .getAttribute("atributo");
// let hola = document.querySelector(".contenedor").getAttribute("hola");
// console.info(hola);

// // con esto podemos eliminar un atributo de una etiqueta <html>
// document.querySelector(".contenedor").removeAttribute("hola");


// // ATRIBUTOS GLOBALES


// // contentEditable = "true" ---> con esto podemos editar un texto como si fuera un input.


// // dir="rtl" --> con esto podemos cambiar la posicion en linea de un texto de la pagina
// // ... es como la justificacion o alineacion del texto.

// // hidden ---> si colocamos esta palabra, ocultara 
// // el contenido o la etiqueta en donde esta misma se encuentre


// // el contentEditable es como hacer que un texto se comporte como un input( que sea editable)
// document.querySelector("h4").setAttribute("contentEditable","true");

// // title = "true" ---> es como colocar un texto al pasar el cursor de un elemento html en el navegador
// document.querySelector(".parrafo").setAttribute("title","Hola")

// // ATRIBUTOS DE INPUTS

// // obtener nombre de la clase a la cual nosotros 
// // ...estamos asignando
// // let input = document.querySelector(".input--one").className();

// // value(); ---> de esta forma obtenemos el valor de value 
// // ... el cual se encuentra en el <html>
// // document.querySelector(".input--one").value();


// // con esto podemos definir o modificar el tipo de un input
// let input = document.querySelector(".input--one").type = "text";

// // Accept ---> esto es para aceptar ciertos archivos en especifico
// // ... se usa solo para los input de type (file).

// // placeholder() --> texto "fantasma" dentro del input
// document.querySelector(".input--one").placeholder = "Holaaa";


// // esot funciona cuando elnput se encuentre dentro de una etiqueta <form>
// // ... en el doc html,lo cual hara que el formulario no se pueda enviar 
// // si no cumple el requisito minimo de caracteres del input.
// document.querySelector(".input--one").minLength = 2;


// // con esto podemos decirle cuantos caracteres com;o maximo acepte el input
// document.querySelector(".input--one").maxLength = 3;

// // required
// // esto sirve para la validacion de formularios
// // inpide que el formulario se envie si este input no ha sido rellenado
// document.querySelector(".input--one").required = "true";

// // ATRIBUTO STYLE
// // con esto podemos utilizar estilos dentro de JS usando
// // lenguaje CSS.
// // ** tener en cuenta que las palabras conformadas por dos, ejemplo:
// // border-radius ---> en js lo llamamos asi: borderRadius
// // ** Esto es por el Case Sensitive

// let input_gen = document.querySelector(".input--one");

// input_gen.style.outline = "none";
// input_gen.style.border = "none";
// input_gen.style.padding = "6px";
// input_gen.style.border = "2px solid red";
// input_gen.style.borderRadius = "90px"


// // CLASES
// // todo esto va relacionado con el selector -class-
// // recordar que antes de colocar el metodo,
// // tenemos que colocar el objeto -classList-

// // con esto podemos agregar una clase con el selector que definimos
// input_gen.classList.add("jejejej")

// // dentro del parametro que recibe este metodo, debemos de colocar
// // la clase que queremos eliminar
// input_gen.classList.remove("jejejej");


// // **
// input_gen.classList.add("hola");
// // **

// // esto funciona como una especie de array con las clases
// // nos devuelve el nombre de la clase de acuerdo a la posicion
// // en que se encuentra en el atributo
// let indice_valor = input_gen.classList.item(0);
// console.log(indice_valor);


// // este metodo nos devuelve -true- o -false- si la clase que estamos
// // buscando y a la cual le pasamos como parametro se encuentra 
// // dentro del atributo class
// let indice_true = input_gen.classList.contains("hola");
// console.log(indice_true);

// // toggle --> lo que es que segun el parametro que le indiquemos
// // va buscar si existe esa clase...
// // Si existe --> la elimina
// // si no existe ---> coloca este nuevo nombre de clase
// input_gen.classList.toggle("Hola")

// // lo que hace el metodo -reolace();- es reemplazar una clase por otra
// // este metodo recibe 02 pamaetros ---> 
// // primer parametro ---> es la clase que queremos reemplazar
// // segundo parametro ---> es la nueva clase que tomara su lugar 
// // devuelve true o false dependiendo si la clase que queremos reemplazar
// // ... existe o no.
// input_gen.classList.replace("Hola", "hola-como-estas");


// OBTENCION Y MODIFICACION DE ELEMENTOS.
// * textContent() --> esto nos devuelve el texto de cualquier nodo. 

// * innerText() --->  devuelve lo que tenemos dentro de la etiqueta <html>


// innerHtml() ---> nos muestra el codigo html --- limitado

// outerHtml ---> esto nos muestra el todo el codigo de una etiqueta <html>

// const contenedor = document.querySelector(".container--llaves")

// let contador = 0

// function crearLlave(nombre,modelo,precio){
//     contador++;
//     img = `<img class="llave-img" src="../img/llave-dorada.png">`
//     nombre = `<h2>${nombre}</h2>`;
//     modelo = `<h3>${modelo}</h3>`;
//     precio = `<p>Precio: <b> S/.${precio}</b></p>`;
//     return [img,nombre,modelo,precio];
// }

// let documentFragment = document.createDocumentFragment();

// const changeHidden = (obtener_codigo) =>{
//     document.querySelector(".key-data").value = obtener_codigo;

// }

// for (var i = 1; i <= 20; i++){
//     let precio_aleatorio = Math.random()*10 + 30;
//     precio_aleatorio = Math.round(precio_aleatorio);
//     let cod_producto = Math.random()*10000
//     cod_producto = Math.round(cod_producto);
//     cod_producto = cod_producto.toString().padStart("8" ,"000");
//     let llave = crearLlave(`Llave ${i}`,`Modelo ${cod_producto}`, precio_aleatorio);
//     let div = document.createElement("DIV");
//     div.addEventListener("click", ()=>{changeHidden(cod_producto)})
//     div.tabIndex = i;
//     div.classList.add(`item-${i}`,`llaves-item`);
//     div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
//     documentFragment.appendChild(div);
// }

// contenedor.appendChild(documentFragment);


// asi creamos una clase
// class contenedor{
//     constructor(marca,color){
//         this.marca = marca;
//         this.color = color;
//     }
// }

// funcion normal
function saludar(){
    // ... codigo
}

// funcion flecha
let saludo = ()=>{
    // codigo
}

// para crear nombres de variables debemos tener el cuenta el case sensitive.

// bucle while
// let numero_generico = 0

// while (numero_generico < 20){
//     numero_generico++
//     document.write(numero_generico + "<br>");
// }


// MID LEVEL

// Esto nos habre una nueva ventana, (abriendo la pagina que le indiquemos en la URL).
// let ventana = window.open("https://www.youtube.com");

// esto cierra la ventana
// ventana.close(); 

// window.print();

// window.prompt("Dame un dato");



// let respuesta = window.confirm("Estas seguro de salir?");
// console.log(respuesta);

// _screen = window.screen;
// console.log(_screen);
// document.write(_screen);

// const desplazamiento_vertical = window.scrollY;
// alert(desplazamiento_vertical);

window.scroll(0,100);

let localizacion = window.location.hostname;
console.log(localizacion);

let name_p = window.location.pathname;
console.log(name_p);


// let security = window.location.protocol;
// console.log(security);

// let alto = window.screen.height;
// let ancho = window.screen.width;

// compra = window.confirm(`Computadora HP | Alto: ${alto} | Resolucion: ${ancho}`);

// if (compra == true){
//     alert("Compra Realizada correctamente");
// }else{
//     alert("Compra cancelada");
// }

// Ejercicio 1: Conocer la direccion de una pagina web.

// let url_complet = window.location.href;
// let path_name = window.location.pathname;
// let hogar = window.location.hostname;
// let protocolo = window.location.protocol;


// let html = `Protocolo: <b>${protocolo}</b><br>`;
// html += `Hostname: <b>${hogar}</b><br>`;
// html += `PathName: <b>${path_name}</b><br>`;
// html += `Enlace: <b>${url_complet}</b><br><br><br><br><br>`;


// document.write(html);

// events

// const button = document.querySelector(".button");

// button.addEventListener("click", ()=>{
//     window.alert("Hola");
//     button.removeEventListener("click", ()=>{})
// })

// button.addEventListener("click",saludar);

// function saludar(){
//     alert("hola");
//     button.removeEventListener("click",saludar);
// }


// button.addEventListener("click",(e)=>{
//     console.log(e);
// });


// doble click seguidos
// button.addEventListener("dblclick", (e)=>{
//     alert("doble click");
// })

// button.addEventListener("mouseover", ()=>{
//     alert("Hola");
// })

// button.addEventListener("contextmenu", ()=>{
//     alert("click derecho ;D");
// })

// const tecla = document.querySelector(".input--prueba");

// tecla.addEventListener("keydown", ()=>{
//     console.log("Se solto una tecla")
// })

// tecla.addEventListener("keypress", ()=>{
//     console.log("se presiiona una tecla y se solto")
// })

// addEventListener("resize", ()=>{
//     this.console.log("se esta cambiando la resolucion");
// })

// addEventListener("scroll",()=>{
//     this.console.log("Se esta scrolleando");
// })

// const hola = setTimeout(()=>{
//     document.write("Hola")
// }, 2000)


// const chau = clearTimeout(()=>{
//     document.write("Chaufa")
// }, 2000)

// const repeticion = setInterval(()=>{
//     console.log("repeticion");
// }, 2000)

// clearInterval(repeticion);


const nombre = document.getElementById("nombre");
const correo = document.getElementById("email");
const materia = document.getElementById("materia");
const button = document.getElementById("btn-submit");
const resultado = document.querySelector(".resultado");

button.addEventListener("click",()=>{
    let error = validar();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
        resultado.classList.remove("green");
    } else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validar = ()=>{
    let error = [];
    if (nombre.value.length < 5){
        error[0] = true;
        error[1] = "El nombre no pude contener menos de 05 caracteres.";
        return error;

    }else if(nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede contener mas de 40 caracteres.";
        return error;

    } else if(correo.value.length < 5 || correo.value.length > 40 ||
                correo.value.indexOf("@") == -1 ||
                correo.value.indexOf(".") == -1){
                    error[0] = true;
                    error[1] = "El mail es invalido";
                    return error;
                } else if(materia.value < 4 || materia.value > 40){
                    error[0] = true;
                    error[1] = "La materia no existe";
                }

    error[0] = false;
    return error;
}