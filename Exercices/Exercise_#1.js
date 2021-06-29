/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5,only count it once. Also, if a number isnegative, return 0(for languages that do have them)
*/

const multiples = (number_passsed) => {

let cont = 0;
let multiple_collection = [];

for (let x = 0; x < number_passsed; x++){

if (x % 3 == 0 || x % 5 == 0 ){
cont = cont + x;
multiple_collection.push(x);
}
}
console.log(`The sum for the multiples is: ${cont}. \n The multiples for the number given is: ${multiple_collection}`);
}
multiples(10);