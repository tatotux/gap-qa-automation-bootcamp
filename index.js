// Problem 1

function getSumMultiples3_5(limit) {
    let sum = 0;
    if (limit < 0) throw new Error('Negative numbers are not allowed');
    for (let i = 1; i < limit; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }

    return sum;
}

// console.log(getSumMultiples3_5(10));
// console.log(getSumMultiples3_5(16));
// console.log(getSumMultiples3_5(-4));

// Problem 2

function isNarcissistic(number){
    let numDigits = number.toString().length;
    let sum = 0; 
    for(let i = 0; i < numDigits; i++) {
        sum += number.toString()[i] ** numDigits;
    }
    return sum == number
}

// console.log(isNarcissistic(153));
// console.log(isNarcissistic(1652));

// Problem 3

function maskify(text){
    let visible = text.slice(-4);
    return "#".repeat(text.slice(0,-4).length) + visible;
}

console.log(maskify("123456789"));
console.log(maskify("Skippy"));

// Problem 4

