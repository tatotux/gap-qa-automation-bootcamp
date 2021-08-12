
//Problem 1

const isMultiple = (number)=>{
    let sum = 0;
    for(let i = 1; i < number; i++)
    {
    i % 3 === 0 || i % 5 === 0 ? sum += i : 0
    }
    return sum;  
}
// Problem 2
const isNarcissistic = (number) =>{
    let num= number.toString();
    let sum =0;
    for (const i of num)
    {
     sum+= parseInt(i)** num.length;
    } 
    return (number === sum) ;
}

//Problem 3
const maskify = (text) => {
    let mask = text.substr((text.length -4), text.length);
    if(text.length > 4)
    { 
    let toBeMask= '';
        for (const i of text.substr(0, (text.length -4)))
        { 
            toBeMask = toBeMask + '#' ;
        }
    mask = toBeMask.concat(mask);
    } else {mask = text;} 

    return mask;}

//Problem 4
const isPangram = (text) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (const i of alphabet) {
        if( text.toLowerCase().indexOf(i) === -1) 
        return false ;
    } 
    return true;
}
//Problem 5
const countDuplicated = (text) => {
const duplicated= [... text.toLowerCase()]
    .filter((actual, index, array) => array.indexOf(actual) != array.lastIndexOf(actual) );
return [... new Set (duplicated)].length;
}

const number= -153;
const text = "abcde";//
console.log (Number.isInteger(number) && number > 0 ? isMultiple(number) : 0);
console.log (Number.isInteger(number) && number > 0 ? isNarcissistic(number) : "Can't be process");
console.log (maskify(text));
console.log(isPangram(text));
console.log(countDuplicated(text));

