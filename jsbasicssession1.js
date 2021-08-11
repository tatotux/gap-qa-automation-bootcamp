// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function sumMultiples(number){

  let total =0;
  for(let i=0; i<number; i++){
    (i%3 == 0 || i%5 == 0) ? total+=i : console.log('-');
    }
  return total;
  }

  function printSum(number){
    number>0 ? console.log(sumMultiples(number)) : console.log('Negative value');
    return 0; //not sure about returning 0 ...
  }

  //printSum(10);

  
// Problem 2
// A Narcissistic Number is a positive number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base. In this exercise, 
// we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:
// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero 
// integers will be passed into the function.

function narcissistic (){
  let givenNumber = [1,6,5,2];
  let exponent = givenNumber.length;
  let total = 0;

  console.log(exponent);
  for(let i=0; i<exponent; i++){
    total+= Math.pow(givenNumber[i],exponent);
    }

  return total;


}

console.log(narcissistic());