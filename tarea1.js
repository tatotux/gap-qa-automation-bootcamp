
//Problem 1
const sumMultiple = (number)=>{
let num = [];
for(let i=1; i <= number;i++) 
{num.push(i);}
return num.reduce((sum,actualValue)=> actualValue % 3 === 0 || actualValue % 5 === 0 ? sum += actualValue : sum = sum);   
}
// Problem 2
const isNarcissistic = (number) =>{
   
    let sum =[... number.toString()].map((value, index, array)=> value ** array.length)
    .reduce((sum,actual)=> sum +actual);
       return (number == sum) ;
}

//Problem 3
const maskify = (text) => {
   let mask = [... text];
   const toBeMask= mask.map((x, index, array)=> index < (array.length - 4) ? x = "#" : x = x)
   .reduce((acc,current)=> acc.concat(current.toString()));
   return toBeMask;
}

//Problem 4
const isPangram = (text) => {
let charOnthetext = [... new Set (text.replace(/\s+/g, ''))].length;
return charOnthetext ===26 ?  true :  false ;
}
//Problem 5
const countDuplicated = (text) => {
const duplicated= [... text.toLowerCase().replace(/\s+/g, '')]
    .filter((actual, index, array) => array.indexOf(actual) != array.lastIndexOf(actual) );
return [... new Set (duplicated)].length;
}

const number= 153;
const text ="Mr Jorck TV quiz PhiD bags few lynx";//
console.log (Number.isInteger(number) && number > 0 ? sumMultiple(number) : 0);
console.log (Number.isInteger(number) && number > 0 ? isNarcissistic(number) : "Can't be process");
console.log (maskify(text));
console.log(isPangram(text));
console.log(countDuplicated(text));

