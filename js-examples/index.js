//1. 
const numbers = [3,5,6,9]
console.log(numbers.reduce((i, currentValue) => i + currentValue, 0));

//2.
const narcissistic = (number) => {
    const chain = number.toString(),
          lenghtNumber = chain.length;
    let sum = 0;

    for (let i = 0; i < lenghtNumber; i++) {
        let wholeNumber = parseInt(chain[i]),
            raised = wholeNumber ** lenghtNumber;
        sum = sum + raised;
    }
    
    if (sum === number) return true;
    else return false;
    
}
console.log(narcissistic(33));

//3.
const maskify = (word) => {
      let word1 = word.slice(word.length - 4);
      let word2 = '';

      let text = [];
        for(i = 0; i < word1.length; i++){
            text.push(String.fromCharCode(word2))
      }
      return text.join('####') + word1;
}
console.log(maskify("2452342344444")); 

//4.
const pangram = (text1) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return Array.from(alphabet).every(letter => text1.includes(letter));
}
console.log(pangram("The quick brown fox jumps over the lazy dog"));

//5.
function countDuplicates(text2){
    let str = text2.toLowerCase();
    let quantity = 0;
    let repeatLetters = '';
    for (let i = 0; i < str.length; i++) {
        let temp = str.substr(i+1, str.length);
        if (temp.indexOf(str[i]) > -1 && repeatLetters.indexOf(str[i]) == -1) {
            repeatLetters += str[i];
            quantity++;
        }
    }       
    return quantity;
}   
console.log(countDuplicates("indivisibility"));



