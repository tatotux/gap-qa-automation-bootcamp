//Problem 1 

let add = 0;

for(i = 0; i < 10; i++){
  if(i%3 == 0 || i%5 == 0){
    add = add + i;
  }
}

console.log(add);

//Problem 2

const narcissisticNumber = (num) => {
    let x = 1, count = 0;
    
    while(num / x > 1){
       x *= 10;
       count++;
    };

    let add = 0, temp = num;
    
    while(temp){
       add += Math.pow(temp % 10, count);
       temp = Math.floor(temp / 10);
    };
    
    return add === num;
 };

 console.log(narcissisticNumber(153));
 console.log(narcissisticNumber(1652));

 //Problem 3

 const maskify = (maskedNumber) => {
    let ccArray = Array.from(maskedNumber);
    let length = maskedNumber.length;
    let lastFourDigits = maskedNumber.slice(-4);
    let emptyArray = [];

    if (length <= 4) {
        return maskedNumber;

    } else if (length > 4) {
        let index = length - 4;
        ccArray.splice(index, 4);
        ccArray.forEach(x => {
            emptyArray.push('#');
            return emptyArray;
        });
  
        return emptyArray.concat(lastFourDigits).join('');
    }
}

console.log(maskify('4556364607935616'));
console.log(maskify('64607935616'));
console.log(maskify('1'));
console.log(maskify(""));

//Problem 4 

function aPangram(sentence){
    sentence = sentence.toLowerCase();
    let abecedary ='abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < abecedary.length; i++){
        let search = abecedary.indexOf(abecedary[i]);
            if (search == -1){
            return false; 
            }
    }
  
    return true;
}

console.log(aPangram('The quick brown fox jumps over the lazy dog'));

//Problem 5

function duplicateCount(text) {
    let anyText = text.toLowerCase(); 
    let emptyObject = {};
    let counter = 0;

    for (let i = 0; i < anyText.length; i++) { 
        if (!emptyObject[anyText[i]]){
            emptyObject[anyText[i]] = 1;
        }else if (emptyObject[anyText[i]] < 2) {
            emptyObject[anyText[i]] += 1;
            counter++;
        }
    }
  
    return counter;
}

console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('aA11'));
console.log(duplicateCount('ABBA'));