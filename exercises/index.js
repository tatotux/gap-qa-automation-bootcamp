// Exercise 1
function sumMultiples(number) {
    let result = 0;
    if (number < 0) return false;
    for (let i = 1; i < number; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            result += i;
        }
    }

    return result;
}
// Test
console.log(sumMultiples(10));

// Exercise 2
function narcissistic(number){
    let stringNum = number.toString();
    let digits = stringNum.length;
    let sum = 0; 
    for(let i = 0; i < digits; i++) {
        sum += stringNum[i] ** digits;
    }
    return sum == number
}
// Test
console.log(narcissistic(153));
console.log(narcissistic(1652));

// Exercise 3
function maskify(text){
    let visible = text.slice(-4);
    let toMask = text.slice(0,-4);
    return "#".repeat(toMask.length) + visible;
}
// Test
console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));

// Exercise 4
function pangram(text){
    return "abcdefghijklmnopqrstuvwxyz".split("").every(x => text.includes(x));
}
// Test
console.log(pangram("The quick brown fox jumpsover the lazy dog"));

// Exercise 5
function countDuplicates(text){
    let textLowercase = text.toLowerCase(); 
    let objCount = {}; 
    for (var i = 0; i < textLowercase.length; i++) {
        if (!objCount[textLowercase[i]]){
            objCount[textLowercase[i]] = 1;
        } else {
            objCount[textLowercase[i]]++;
        }
    }
    for (const prop in objCount) {
        if (objCount[prop] > 1)
            console.log(`${prop} ocurrs ${objCount[prop]} times`);
    }
}
// Test
console.log(countDuplicates("abcde"));
console.log(countDuplicates("aabBcde"));
console.log(countDuplicates("indivisibility"));
console.log(countDuplicates("aA11"));