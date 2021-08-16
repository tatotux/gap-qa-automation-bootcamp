
// PROBLEM 1
multiples_3_5(10);

function multiples_3_5(number){
    let suma = 0;
    
    if ((Math.sign(number) === 1)||(Math.sign(number) === 0)){
        for(let i =1; i < number; i++){
            if((i % 5 === 0)||(i % 3 === 0)){
                suma += i
            }
        } 
    }
    return console.log(suma)
}


// PROBLEM 2
narcissisticNumbers(153);

function narcissisticNumbers(number){
    let lengthNumber = `${number}`.length;
    let NewSum= 0;

    String(number).split("").map((num)=>{
        NewSum += Math.pow(num,lengthNumber)  
    })

    if(number === NewSum) return console.log('true'); else {console.log('false')}
}


//PROBLEM 3
maskedValue('Skippy');

function maskedValue(UnMaskedValue) {  
    const characters = UnMaskedValue.slice(-2)
    return console.log(characters.padStart(UnMaskedValue.length, '#'));
}


//PROBLEM 4
function isPangram (text){
    let alphabet2 = 'abcdefghijklmnopqrstuvwxyz'
    let noDuplicates = [...new Set(text.toLowerCase().replace(/[^A-Z0-9]/ig, ""))]
    let isPangramText = true

    for(let i = 0;i<=alphabet2.length-1;i++){           
        if (!noDuplicates.includes(alphabet2[i])) isPangramText = false           
    }
    
    return console.log(isPangramText)
}

isPangram('The quick brown fox jumps over the lazy dog')


//PROBLEM 5
duplicates('aabAcdebe112')

function duplicates(text){
let val =  [...new Set(text.toLowerCase().replace(/[^A-Z0-9]/ig, ""))]
let results = []

 val.forEach(str =>{     

    let regex =  new RegExp(`/^[${str}]/ig`)
    let regex2 =  new RegExp(`/^[${str.toUpperCase()}]/ig`)

    let count = (text.match(regex) || text.match(regex2)|| []).length

    results.push(`letter ${str}, count ${count}`)    
    
}) 
console.log(results);
}


