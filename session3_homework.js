
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







   


