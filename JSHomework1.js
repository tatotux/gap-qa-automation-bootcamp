//Problem 1
let sum = 0;
function problem1(number){
    for(let i=1; i<number; i++){
            if((i % 3) == 0 || i % 5 == 0){
                sum += i;
            }
    }
    console.log(sum)
}
problem1(30)


//Problem 2
function isNarcissistic(number){
    const digits = Array.from(number.toString());
    const length = digits.length;
    const power = (num) => num ** length
    const poweredNumbers = digits.map(power);
    let sum = poweredNumbers.reduce(function(accumVariable,curValue) {return accumVariable + curValue}, 0);
    return sum === number
}
console.log(isNarcissistic(9474))


//Problem 3
function maskify(string){
    let maskedarray = string.split('');
    const maskedchar = string.length - 4;
    for (var i = 0; i < maskedchar; i++){
        maskedarray[i] = "#";        
    }
    return maskedarray.join('');
}
console.log(maskify("254785896521402305"))


//Problem 4
function isPangram(string){
    const letters = string.toLowerCase().match(/([a-z])(?!.*\1)/g);
    return letters.length === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"))


//Problem 5 
//No logré terminar lo que quería hacer ¯\_(ツ)_/¯

function duplicateCount(string){
    const lowercasestring = string.toLowerCase();
    const array = string.split('');
    const sortedarray = array.sort();
    for (var i = 0; i < array.length; i++){
        count = 0
        //while (sortedarray[i] === sortedarray[(i+1)]){
            count += 1;
        }
    }
    return sortedarray;
}
console.log(duplicateCount("Aleex34"))