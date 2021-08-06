
// PROBLEM 1 - SOLUTIONS
multiples_3_5(1);

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


   


