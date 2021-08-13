//Problem 1

function naturalNumbersBelow(input) {
    let sum = 0;
    for (i = 0; i < input; i++){
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }

    return sum;
}

console.log('Problem 1:');
console.log(naturalNumbersBelow(10));




//Problem 2

function isNarcisitNumber(input) {
    let pow = input.toString().split('').map(function(value) {
      return Math.pow(value, input.toString().length);
    });
    let accmulation = pow.reduce(function(initial, current) {
        return initial + current;
    });
    let result = accmulation === input;
    return result;
}
 

 console.log('Problem 2');
 console.log(isNarcisitNumber(153));
 


//Problem 3

function maskify(somethingToMask) {
    somethingToMask = somethingToMask.toString();
    return somethingToMask.replace(/.(?=.{4,}$)/g, '#'); 
}

console.log('Problem 3');
console.log(maskify('Hello from the other side'));
//console.log(maskify(55226699853621))



//Problem 4

function isPangram(input) {
    const letters = input.toLowerCase().match(/[a-z]/g); 
    const alphabet = [...new Set(letters)]
    return alphabet.length === 26;
}

console.log('Problem 4');
console.log(isPangram('The quick brown fox jumps over the lazy dogz'));
//console.log(isPangram('This is not a pangram: Ronald'));



//Problem 5
function countNumberOfDuplicates(input) {

    let inputString = typeof input ==='string' ? input.toLowerCase() : input.toString();
    let obj = {}; 
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (!obj[inputString[i]]) obj[inputString[i]] = 1;
        else if (obj[inputString[i]] < 2) {
            obj[inputString[i]] += 1;
            count++;
        }
    }

    return count;
}


console.log('Problem 5:');
console.log(countNumberOfDuplicates('Ronald Ramirez'));
//console.log(countNumberOfDuplicates(2556334));

