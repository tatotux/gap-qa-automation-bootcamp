const numbers = [3,5,6,9];
console.log(numbers)

const reducer = (accumulator, curr) => accumulator + curr;
console.log(numbers.reduce(reducer));