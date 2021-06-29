//Problem 1

function sum_multiples (param) {
let suma = 0 

for (let num = 0; num < param; num++) {
    if (num % 3 == 0 || num % 5 == 0){
        suma += num
    }
}
 return suma
}

console.log( sum_multiples(10) )

//Problem 2

function narcissistic_number(num) {
    if(num <= 0 || typeof num == "string"){
        return false
    }

    let arrNum = num.toString().split("")
    let result = 0

    arrNum.forEach(numStr => {
  
        result += Math.pow(parseInt(numStr), arrNum.length)

    });

   
   return result === num 

   
}
console.log(narcissistic_number(153))

//Problem 3

   const maskify = (cc) => {
       let ccArray = Array.from(cc)
       let length = cc.length
       let lasFour = cc.slice(-4)
       let newArray = []

       if (length <= 4) {
           return cc
       } else if (length > 4) {
           let index = length -4
           ccArray.splice(index, 4)
           ccArray.forEach(n => {
               newArray.push('#')
               return newArray
           })
           return newArray.concat(lasFour).join('')
       }
   }
console.log(maskify ('1233455'))