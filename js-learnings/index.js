// const name = "Maria"

// const size = 1.72

// const children = []

// console.log('8' === 8) // ==: valor de variable, ignora tipo, ===: toma cuenta el tipo

// children[0] = 'Marco'

// name === "Maria" ? console.log("Yay!") : console.log("Nuuu")

// function getName(){
//     let index = 5 //este es diferente al del for por la palabra let
//     for(let index = 0; index < 6; index++){

//     }
// }

//Hoisting: coloca las function declaration al tope del codigo para que sean compiladas primero
//Para expression ni arrow funciona
// function add(num1, num2) { //function declaration
//     return num1 + num2;
// }
// console.log(add(1,2));

// const multiply = function (num1, num2) { //funcion expression, nameless
//     return num1 * num2;
// } 
// console.log(multiply(2,5));

// const divide = (num1, num2) => num1 / num2; //Arrow function
// console.log(divide(8,2))

// const substract = (num1, num2) => { //Arrow function with body
//     console.log("Executing...")
//     return num1 - num2; 
// }
// console.log(substract(3,2))

//dentro de obj, si se usa arrow func y evalua el this no toma el objeto sino el window
//Si se ocupa this, utilizar function declaration
// const person = { 
//     name: 'Maria',
//     age: 25,

//     greet: function() {
//         //console.log('Hello ' + this.name)
//         console.log(`Hello ${this.name}`) //literal templates
//     }
// }

//parametro: placeholder en funcion, argumento: valor concreto

const names = ["Maria", "Jose", "Marco"];
names.push("Andrea");
//const deleted = names.pop();

// for(let name of names) {
//     console.log(name)
// }

names.forEach((name) => console.log(name)); //itera en todos los elem
//every: se fija que x condicion se cumpla para todos los elem, retorna bool
//some: se fija que x condicion se cumpla para al menos 1 elem, retorna bool
//map: transforma los elementos de un array segun una regla, devuelve nuevo elemento
//expresiones regulares (regex) se expresan: /(param)/ 