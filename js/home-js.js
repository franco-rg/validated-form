// Variable
// recipiente = "papel";
// Esto nos desplega una alerta con el valor que
// nosotros colocamos en nuestra variable -recipiente-.
// alert(recipiente);

// Variables
// String = "Cadena de Texto";
// const numero89 = 50;
// numero89 = 80;
// podemos declarar una variable pero no inicializarla...

// Variables en la misma linea
// let numero1 = 12, numero2 = 90, numero3 = 120;
// // let numero5 = null;

// // funcion promt
// let nombreCaja = prompt("Escribe tu nombre para empezar");
// alert("Hola! " + nombreCaja);

// let number_js = 10;
// number_js += 5;

// let numero_1 = 50;
// let numero_2 = 21;
// numero_2++;
// respuesta = numero_2;

// saludo = '¡Hola!';
// pregunta = '¿Como estas?';

// concatenacion = saludo + pregunta;
// document.write(concatenacion);

// respuesta__sumada = number__1.concat(number__2);
// document.write(respuesta__sumada);

// Backticks
// nombre = prompt("Ingresa tu nombre.");
// welcome = `<h1>Hola!</h1>
//            <p>${nombre}, bienvenido a casa!</p>`;
// document.write(welcome);


// Operadores comparativos
// numero100 = 100; 
// numero100 = 100;

// document.write(numero100 == numero100);

// distintos
// numerods1 = 1;
// numerods2 = 20;
// document.write(numerods1 != numerods2);

// identico
// identy1 = 10
// identy2 = "10";
// document.write(identy1 === identy2);

// menor que... mayor que.....
// numthen1 = 10;
// numthen2 = 15;
// document.write(numthen1 <= numthen2);


// Condicionales
// let numerocd1 = 10;
// let numerocd2 = 20;

// if (numerocd1 == numerocd2){
//     document.write("La respuesta es que son iguales, por ende, me ejecuté.");
// }else if(numero_2 === numerocd2){
//     document.write("La respuesta es que son exactamente iguales, por ende, me ejecuté");
// }else{
//     document.write("Adios!");
// }


// Ejercicio 01
// let montoCofla = prompt("Ingrese monto, Cofla: ");
// let montoPedro = prompt("Ingrese el monto, Pedro: ");
// let montoMario = prompt("Ingrese el monto, Mario: ");

// // Convertir a numero entero
// montoCofla = parseInt(montoCofla);
// montoPedro = parseInt(montoPedro);
// montoMario = parseInt(montoMario);

// // Section Cofla
// if (montoCofla >= 0.6 && montoCofla <= 1){
//     document.write("Cofla, puedes adquirir un helado simple");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoCofla - 0.6}`);
//     document.write(`<br>`);
// }else if(montoCofla > 1 && montoCofla <= 1.6){
//     document.write("Cofla, puedes adquirir un helado de crema");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoCofla - 1}`);
//     document.write(`<br>`);
// }else if(montoCofla > 1.6 && montoCofla <= 1.7 ){
//     document.write("Cofla, puedes adquirir un helado de fresa");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoCofla - 1.6}`);
//     document.write(`<br>`);
// }else if(montoCofla > 1.7 && montoCofla <= 1.8){
//     document.write("Cofla, puedes adquirir un helado de lucuma");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoCofla - 1.7}`);
//     document.write(`<br>`);
// }else if(montoCofla > 1.8 && montoCofla <= 2.9){
//     document.write("Cofla, puedes adquirir un helado de mango");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoCofla - 1.8}`);
//     document.write(`<br>`);
// }else if(montoCofla > 2.9){
//     document.write("Cofla, puedes adquirir un helado de Chocolate o un 1/4kg del mismo.")
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoCofla - 2.9}`);
//     document.write(`<br>`);
// }else{
//     document.write("No te alcanza para comprar un helado");
//     document.write(`<br>`);
// }

// Section Pedro
// if (montoPedro >= 0.6 && montoPedro <= 1){
//     document.write("Pedro, puedes adquirir un helado simple");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoPedro - 0.6}`);
//     document.write(`<br>`);
// }else if(montoPedro > 1 && montoPedro <= 1.6){
//     document.write("Pedro, puedes adquirir un helado de crema");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoPedro - 1}`);
//     document.write(`<br>`);
// }else if(montoPedro > 1.6 && montoPedro <= 1.7 ){
//     document.write("Pedro, puedes adquirir un helado de fresa");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoPedro - 1.6}`);
//     document.write(`<br>`);
// }else if(montoPedro > 1.7 && montoPedro <= 1.8){
//     document.write("Pedro, puedes adquirir un helado de lucuma");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoPedro - 1.7}`);
//     document.write(`<br>`);
// }else if(montoPedro > 1.8 && montoPedro <= 2.9){
//     document.write("Pedro, puedes adquirir un helado de mango");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoPedro - 1.8}`);
//     document.write(`<br>`);
// }else if(montoPedro > 2.9){
//     document.write("Pedro, puedes adquirir un helado de Chocolate o un 1/4kg del mismo.")
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoPedro - 2.9}`);
//     document.write(`<br>`);
// }else{
//     document.write("No te alcanza para comprar un helado");
//     document.write(`<br>`);
// }

// // Section Mario
// if (montoMario >= 0.6 || montoMario <= 1){
//     document.write("Mario, puedes adquirir un helado simple");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoMario - 0.6}`);
//     document.write(`<br>`);
// }else if(montoMario > 1 || montoMario <= 1.6){
//     document.write("Mario, puedes adquirir un helado de crema");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoMario - 1}`);
//     document.write(`<br>`);
// }else if(montoMario > 1.6 || montoMario <= 1.7 ){
//     document.write("Mario, puedes adquirir un helado de fresa");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoMario - 1.6}`);
//     document.write(`<br>`);
// }else if(montoMario > 1.7 || montoMario <= 1.8){
//     document.write("Mario, puedes adquirir un helado de lucuma");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoMario - 1.7}`);
//     document.write(`<br>`);
// }else if(montoMario > 1.8 || montoMario <= 2.9){
//     document.write("Mario, puedes adquirir un helado de mango");
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoMario - 1.8}`);
//     document.write(`<br>`);
// }else if(montoMario > 2.9){
//     document.write("Mario, puedes adquirir un helado de Chocolate o un 1/4kg del mismo.")
//     document.write(`<br>`);
//     document.write(`Te sobra: ${montoMario - 2.9}`);
//     document.write(`<br>`);
// }else{
//     document.write("No te alcanza para comprar un helado");
//     document.write(`<br>`);
// }


// Arrays
// frutas = ["manzana", "pera", "banana"];
// document.write(frutas[2] + '<br>');

// Arrays Asociativo - se parece a un formato de json
// Los valores que se definen internamente, los representamos
// con este tipo de signo igual (:)
// pc = {
//     nombre : "LaptopHP",
//     color : "negro",
//     procesador : "Coreo i5",
//     ram : "16GB"
// }

// Bucle While
// let numero1 = 0;
// while (numero1 < 10){
//     numero1++;
//     document.write(`N° ${numero1} <br>`);
// }

// For (bucle)
// Ejemplo de incremento
// for(let i = 0; i < 6; i++){
//     document.write(i + `<br>`)
// }

// Ejemplo de decremento
// for(let j = 6; j >= 0; j--){
//     document.write(`Numero ${j} <br>`)
// }

// Ejemplo de inicializacion de variable para buble for
// let a = 20;
// for(a; a>= 0; a--){
//     document.write(`Numero ${a} <br>`);
// }
// ...si queremos pausar el bucle podemos usar un (if) dentro
// ...del bucle.

// b = 0;
// for(b; b <= 20; b++){

//     if (b == 12 || b == 14){
//         continue;
//     }
//     document.write(`Numero ${b} <br>`);
// }

// FOR IN
// animales = ["gato", "perro", "conejo", "cuy"];

// for (animal in animales){
//     document.write(`Posicion: ${animales[animal]} <br>`)
// }

// // SALTO DE LINEA
// document.write(`<br> <hr>`)

// // FOR OF
// for (animal of animales){
//     document.write(`Animal: ${animal} <br>`)
// }

// Pratica Ejemplar
// let entradas = [
//     "Ingrese su Nombre: ",
//     "Ingrese su Apellido: ",
//     "Ingrese su Edad: "
// ]
// let entrada;
// for (entrada of entradas){
//     prompt(entrada);
//     document.write(`Valores Ingresados: ${entrada[entradas]}`)
// }

// label
// arrays
// array1 = ["Anne", "Franco", "Danna", "Joselyn"];
// array2 = ["Ian", "Geraldo","Alex", array1 ,"Nayhely"];

// forFranco:
// for (arrays of array2){
//     if(arrays == array1){
//         for(arrays of array1){
//             continue forFranco;
//             document.write(`Capsula: ${arrays}. <br>`)
//         }
//     }
//     document.write(`Capsula: ${arrays}. <br>`)
// }

// functions
// saludar = function(){

//     pregunta = prompt("Hola Franco, ¿Como estas?");

//     if (pregunta == "bien"){
//         alert("Que alegria!")
//     }
//     else if(pregunta == "mal")(
//         alert("Una lastima")
//     )
//     else{
//         alert("Por favor ingresa algo!")
//     }
// }

// saludar();

// Practice Function
// function suma(num1, num2){
//     let resp = num1 + num2;
//     document.write(`Resultado: ${resp}`)
//     document.write(`<br>`)
// }

// suma(12,12);


// function
// function saludar(nombre){
//     let frase__welcome = `Hola!, ${nombre}, ¿como estas?`;
//     document.write(frase__welcome)
// }

// saludar(prompt("Ingrese Nombre: "));

// Function Flecha

// let saludar = (nombre)=>{
//     alert(`Hola ${nombre}! ¡Buen dia!`);
// }

// saludar("Franco");


// Ejercicio
// let edad

// const hora = (actual)=>{
//     edad = prompt("Ingrese su edad:");
//     if (edad >= 18){
//         if(actual >= 2 && actual <7){
//             alert(`Puedes Ingresar! Disfruta! <br> Hora Actual: ${actual}`);
//         }
//         else{
//             alert(`Puedes Ingresar pero tienes que pagar :D <br> Hora Actual: ${actual}`);
//         }
//     }
//     else{
//         alert("Eres menor de edad, no puedes ingresar.");
//     }
// }

// // ejecucion
// hora(3);
// hora(9);
// hora(8);


// INSTITUCION
// let cantidad = prompt("Numero de Alumnoss: ");
// let alumnosTotales = [];

// Calculadora JS

// function calculadora (num1, num2){
//     let respuesta;
//     op = prompt("Ingrese 1. Suma | 2. Resta | 3. Multiplicacion | 4. Division");
//     if (op == 1){
//         num1 = prompt("Ingrese Numero 1 a sumar: ");
//         num2 = prompt("Ingrese Numero 2 a sumar: ")
//         respuesta = parseInt(num1 + num2);
//         alert("La respuesta es:" + respuesta);

//     } else if(op == 2){
//         num1 = prompt("Ingrese Numero 1: ");
//         num2 = prompt("Ingrese Numero 2 para restar: ");
//         respuesta = parseInt(num1 - num2);
//         alert("La respuesta es: " + respuesta);
//     }

//     else if(op == 3){
//         num1 = prompt("Ingrese numero 1 a multiplicar: ");
//         num2 = prompt("Ingrese numero 2 a multiplicar: ");
//         respuesta = parseInt(num1 * num2 );
//         alert("La respuesta es: " + respuesta);
//     }

//     else if(op == 4){
//         num1 = prompt("Ingrese numero 1 a dividir: ");
//         num2 = prompt("Ingrese numero 2 a dividir: ");
//         respuesta = parseInt(num1 / num2 );
//         alert("La respuesta es: " + respuesta);
//     }
//     else{
//         alert("No se reconoce la opcion. ");
//     }
// }

// calculadora();

// POO
// class animal{
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//     }
// }

// POO
// class animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Hola! Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
//     }

//     verInfo(){
//         document.write(`${this.info} <br>`);
//     }
// }

// Con esto decimos que estamos creando un objeto del tipo animal.
// const perro = new animal("perro", 5, "marron");
// const gato = new animal("gato", 8, "blanco");
// const conejo = new animal("conejo", 1, "negro");

// document.write(`Informacion de objeto: <b style="color: #f01"> ${perro.info} </b> <br>`);
// document.write(`Informacion de objeto: <b style="color: #f01"> ${gato.info} </b> <br>`);
// document.write(`Informacion de objeto: <b style="color: #f01"> ${conejo.info} </b> <br>`);

// perro.verInfo();
// gato.verInfo();
// conejo.verInfo();

// POO
// class animal{
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Hola! Soy un ${this.especie}, tengo ${this.edad} años de edad, y soy de color ${this.color} `;
//     }

//     verInfo(){
//         document.write(`${this.info} <br>`)
//     }
// }

// let perro = new animal("perro", 5, "cafe");
// let gato = new animal("gato", 2, "blanco");

// perro.verInfo();
// gato.verInfo();


// Herencia
// class mascota{
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Hola! Soy un ${this.especie}, tengo ${this.edad}, años de edad, y soy de color ${this.color}.`;
//     }

//     verInfo(){
//         document.write(this.info + "<br>")
//     }
// }

// Herencia
// class Perro extends mascota{
//     constructor(especie, edad, color, raza){
//         super(especie, edad, color);
//         this.raza = null;
//     }

//     static ladrar(){
//         alert("¡Waw!")
//     }
// }

// const cachorro = new mascota("perro", 12, "cafe", "doberman");
// const lorito = new mascota("loro", 10, "verde");

// Perro.ladrar();
// lorito.ladrar();


// Getters and Setters
// class mascota{
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `¡Hola! Soy un ${this.especie}, tengo ${this.edad} años de edad, y soy de color ${this.color}`;
//     }

//     verInformacion(){
//         document.write(`${this.info} <br>`);
//     }
// }

// class perro extends mascota{
//     constructor(especie, edad, color, raza){
//         super(especie, edad, color);
//         this.raza = null;
//     }

//     // modificador SET
//     set setRaza(newRaza){
//         this.raza = newRaza;
//     }
// }

// const cuy = new perro("cuy", 6, "cafe");

// cuy.verInformacion();
// cuy.setRaza = "Doberman";
// document.write(this.setRaza)

// Celular
// class celular{
//     constructor(color, peso, rp, rc, ram){
//         this.color = color;
//         this.peso = peso;
//         this.rp = rp;
//         this.rc = rc;
//         this.ram = ram;
//         this.encendido = false;
//         this.info = `Informacion del celular <br>
//                      ----------------------------- <br>
//                      Color: <b>${this.color}</b> <br>
//                      Peso: <b>${this.peso}</b> <br>
//                      Resolucion Pantalla: <b>${this.rp}</b> <br>
//                      Resolucion Camara: <b>${this.rc}</b> <br>
//                      Tarjeta Ram: <b>${this.ram}</b> <br>`;
//     }

//     // Métodos
//     verInfo(){
//         document.write(`${this.info} <br>`);
//     }

//     botonEncendido(){
//         if (this.encendido == false){
//             alert("Celular Encendido");
//             this.encendido = true;
//         }else {
//             alert("Celular Apagado");
//             this.encendido = false;
//         }
//     }

//     reinicio(){
//         if(this.encendido == true){
//             alert("Celular Reiniciando")
//             this.encendido = true;
//         }else{
//             alert("El celular esta apagado.");
//         }
//     }

//     tomarFoto(){
//         alert(`Captura de imagen a una resolucion de: ${this.rc}`)
//     }

//     grabarVideo(){
//         alert(`Video grabando en una proporcion de: ${this.rp}`);
//     }
// }

// class celularAltaGama extends celular{
//     constructor(color, peso, rp, rc, ram, rdce){
//         super(color, peso, rp, rc, ram);
//         this.resolucionCamaraExtra = rdce;
//     }

//     camaraLenta(){
//         alert("Usted esta grabando en camara lenta")
//     }

//     reconocimientoFacial(){
//         alert("Usted esta siendo reconocido gracias a IA")
//     }
// }



// const celular1 = new celular("negro", "400gr", 400, 25, "16GB");

// celular1.verInfo();
// celular1.botonEncendido();
// celular1.reinicio();

// METODOS DE CADENA
// -----------------

// let cadena = ["Franco","Danna","Joselyn","Ana"];
// let cadena2 = "oa";

// concatenacion = cadena.filter(filtro => filtro.length > 4);

// document.write(concatenacion);

// OBJECT FIT 
// let numeros = Math.trunc(5.6666666);
// document.write(numeros);


// class calculadora{
//     constructor(){
//     }

//     sumar(num1,num2){
//         return parseInt(num1) + parseInt(num2);
//     }

//     restar(num1,num2){
//         return parseInt(num1) - parseInt(num2);
//     }

//     multiplicar(num1, num2){
//         return parseInt(num1) * parseInt(num2);
//     }

//     dividir(num1, num2){
//         return parseInt(num1) / parseInt(num2);
//     }

//     potenciar(num1, num2){
//         return parseInt(num1) ** parseInt(num2);
//     }

//     raizCuadrada(num1){
//         return Math.sqrt(num1);
//     }

//     raizCubica(num1){
//         return Math.cbrt(num1);
//     }
// } 

// const arranca = new calculadora();

// alert("¿Que operacion deseas realizar?");
// let operacion = prompt("1. SUMA | 2. RESTA | 3.MULTIPLICACION | 4.DIVISION | 5.Potenciacion | 6.RAIZ CUADRADA | 7.RAIZ CUBICA");

// if (operacion == 1){
//     let parameter1 = prompt("Ingrese primer numero a sumar...");
//     let parameter2 = prompt("Ingrese segundo numero a sumar...");
//     let resultado = arranca.sumar(parameter1, parameter2);
//     document.write(`La suma entre ${parameter1} + ${parameter2} es igual a: ${resultado}`);
// }else if(operacion == 2){
//     let parameter1 = prompt("Ingrese primer numero a restar...");
//     let parameter2 = prompt("Ingrese segundo numeero a restar...");
//     resultado = arranca.restar(parameter1, parameter2);
//     document.write(`La resta entre ${parameter1} - ${parameter2} es igual a: ${resultado}`);
// }else if(operacion == 3){
//     let parameter1 = prompt("Ingrese primer numero a multiplicar... ");
//     let parameter2 = prompt("Ingrese segundo numero a multiplicar...");
//     let resultado = arranca.multiplicar(parameter1, parameter2);
//     document.write(`La multiplicacion entre ${parameter1} x ${parameter2} es igual a: ${resultado}`);
// }else if(operacion == 4){
//     let parameter1 = prompt("Ingrese primer numero a dividir... ");
//     let parameter2 = prompt("Ingrese segundo numero a dividir...");
//     let resultado = arranca.dividir(parameter1, parameter2);
//     document.write(`La division de ${parameter1} / ${parameter2} es igual a: ${resultado}`);
// }else if(operacion == 5){
//     let parameter1 = prompt("Ingrese numero a potenciar...");
//     let parameter2 = prompt("Ingrese exponente...");
//     let resultado = arranca.potenciar(parameter1, parameter2);
//     document.write(`La potencia ${parameter2} del numero ${parameter1} es igual a: ${resultado}`);
// }else if(operacion == 6){
//     let parameter1 = prompt("Ingrese numero para sacar raiz cuadrada de él...");
//     let resultado = arranca.raizCuadrada(parameter1);
//     resultado = Math.round(resultado);
//     document.write(`La raiz cuadrada de ${parameter1} es igual a: ${resultado}`);
// }else if(operacion == 7){
//     let parameter1 = prompt("Ingrese numero para sacar potencia cubica...");
//     let resultado = arranca.raizCubica(parameter1);
//     resultado = Math.round(resultado);
//     document.write(`La raiz cuadra de ${parameter1} es igual a: ${resultado}`);
// }else{
//     let ne = "No se encuentra la operacion buscada.";
//     transformacion = ne.toUpperCase();
//     document.write(`<b style="color: #e00">${transformacion}</b>`);
// }

// the console
// document.write(hola);

// console.log("%cHola","color: #96f; background:#e1e1e1;padding: 45px;")


// let materias = {
//     fisica: 60,
//     matematica: 56,
//     logica: 90,
//     quimica: 23,
//     calculo: 75,
//     programacion: 82,
//     biologia: 91
// }

// hola = document.querySelector(".welcome")
// document.write(hola[6]);












