
//Problem 1

const isMultiple = (number)=>{
    let sum=0;
    for(let i=1; i< number; i++){(i%3===0 || i%5===0)? sum+= i:0}
    return sum;  
}
// Problem 2
const isNarcissistic = (number) =>{
    let num= number.toString();
    let sum =0;
    for (const i of num) {sum+= parseInt(i)** num.length;} return (number === sum) ;
}

//Problem 3
const maskify = (text) => {
    let mask= text.substr((text.length -4), text.length);
    if(text.length > 4){ let toBeMask= '';
    for (const i of text.substr(0, (text.length -4))){toBeMask = toBeMask + '#' ;}
    mask = toBeMask.concat(mask);
    } else {mask = text;} return mask;}

//Problem 4
const isPangram = (text) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let textLowercase = text.toLowerCase();
    for (const i of alphabet) {if(textLowercase.indexOf(i)=== -1) return false ;} return true;
}
//Problem 5
const isDuplicated = (text) => {
let duplicated = [...text.toLowerCase()];
let character = "abcdefghijklmnopqrstuvwxyz1234567890";
let counter=0;
for (const i of character) {(duplicated.indexOf (i)< duplicated.lastIndexOf(i)? counter++: counter); }
return counter;}


const number= 1652;
const text = "Laura Castillo Martinez 2255444";//
console.log (Number.isInteger(number) && number > 0?isMultiple(number):0);
console.log (Number.isInteger(number) && number > 0? isNarcissistic(number):undefined);
console.log (maskify(text));
console.log(isPangram(text));
console.log(isDuplicated(text));

