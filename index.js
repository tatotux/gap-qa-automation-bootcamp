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

console.log("Tests problem 1");
console.log(getSumMultiples3_5(10));
console.log(getSumMultiples3_5(16));
//console.log(getSumMultiples3_5(-4));

// Problem 2

function isNarcissistic(number){
    let numDigits = number.toString().length;
    let sum = 0; 
    for(let i = 0; i < numDigits; i++) {
        sum += number.toString()[i] ** numDigits;
    }
    return sum == number
}

console.log("Tests problem 2");
console.log(isNarcissistic(153));
console.log(isNarcissistic(1652));

// Problem 3

function maskify(text){
    let visible = text.slice(-4);
    return "#".repeat(text.slice(0,-4).length) + visible;
}

console.log("Tests problem 3");
console.log(maskify("123456789"));
console.log(maskify("Skippy"));

// Problem 4

function isPangram(text){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.split("").every(x => text.indexOf(x) > -1);
}

console.log("Tests problem 4");
console.log(isPangram("The quick brown fox jumpsover the lazy dog"));
console.log(isPangram("Testing pangram"));

// Problem 5

function countDuplicates(text){
    const textArray = text.toLowerCase().split("");
    const countItems = {};
    textArray.some((v, i, a) => {
        if (a.lastIndexOf(v) !== i) {
            countItems[v] = a.reduce((sum, ch) => ch == v ? sum + 1: sum, 0);
        }
    });
    
    if (Object.keys(countItems).length === 0) {
        return "No characters repeats more than once";
    } else {
        for (let duplicate in countItems) {
            console.log(`${duplicate} ocurrs ${countItems[duplicate]} times`);
        }
        return true;
    }
}

console.log("Tests problem 5");
console.log(countDuplicates("abcdaddda2234"));
console.log(countDuplicates("abcd"));
console.log(countDuplicates("aA11"));