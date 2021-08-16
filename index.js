// Problem #1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

        multipliesNumbers(10);

        function multipliesNumbers (number){

         let count = 0;

                for (let i = 1; i < number; i++){

                        if(number < 0) {
                                console.log(0);
                                return;
                        }              

                        if(( i % 3 === 0) && ( i % 5 === 0)) {
                                //console.log('Numbers 3 and  5 : ', i)
                                count = count + i;
                        }      
                        else if (( i % 3 === 0) || ( i % 5 === 0)) {
                                //console.log('Numbers: 3 or 5 ', i)
                                count = count + i;                    
                        }
                        
                }
                console.log(count);
        } 

// //Problem #2

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this exercise, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

        // narcissisticNumber(93084);

        // function narcissisticNumber(num) {

        //         let originalNumber = num;
        //         let digits = [];
        //         let sum = 0;
        //         let quantityNumber = 0;

        //         while (num > 0) {
        //          digits.push(num % 10);
        //          num = Math.trunc(num / 10);
        //         }

        //         for (let i = 0; i < digits.length; i++){
        //                 quantityNumber = digits.length;
        //                // console.log('La cantidad de números son: ', quantityNumber);
        //                 sum = sum + (Math.pow(digits[i], quantityNumber ));
        //         }

        //         console.log(originalNumber == sum) ?  'True' : 'False';

        //         digits.reverse();
        //         //console.log(digits);
        //        // console.log('The raised number is : ', sum);

        // }

//Problem #3

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
// However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

    // maskify('0123456789');

    // function maskify(input){

    //         if (input.length <= 4) {
    //                  console.log(input)
    //                  return;
    //         }
            
    //         (input.length > 4) ? console.log('#'.repeat(input.length-4) + input.substr(-4,4)) :  console.log(input);     
            
    // }
     

// //Problem 4

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// pangram('The quick brown fox jumps over the lazy dog');

    // function pangram(text) {

    //         text = text.toLowerCase();
    //         text = text.replace(/\s+/g, '');

    //         let lettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //         let entryTextArray = [];
    //         let noDuplicatesArray =[];
    //         let result;

    //         if (text.length < 26) {
    //                 console.log('text too short');
    //                 return;
    //         }
    //                 for (let i = 0; i< text.length; i++) {
    //                                 entryTextArray[i] = text[i]; 
    //                                 entryTextArray.sort();  
    //                                 noDuplicatesArray = [ ...new Set(entryTextArray) ];  
                
    //                 }     

    //                 //console.log(noDuplicatesArray.length);
    //                 //console.log(lettersArray.length);

    //                 for (let j = 0; j < lettersArray.length; j++) {
    //                         for (let k = 0; k < noDuplicatesArray.length; k++) {

    //                                 if (lettersArray[j] == noDuplicatesArray[k])
    //                                         result= 'true'; 
    //                                         else
    //                                         result= 'false'; 
    //                         }
                    
    //                 } 
    //         console.log(result);
    //  }


// Exercise 5

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur 
// more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


    // duplicates("punctuation");

    // function duplicates(input){

    // console.log(input);
    // input = input.replace(/\s+/g, '');
    // let arrayInput=[];
    // let counts= {};

    //             for (let i = 0; i< input.length; i++) {
    //                         arrayInput[i] = input[i]; 
                        
    //                 }

    //         for(let i =0; i < arrayInput.length; i++){ 
    //                 if (counts[arrayInput[i]]){
    //                 counts[arrayInput[i]] += 1
    //                 } else {
    //                 counts[arrayInput[i]] = 1
    //                 }
    //         }  
    //         for (let prop in counts){

    //                 if((counts[prop] < 1)){
    //                     //  console.log("No characters repeats more than once.")
    //                 } else {
    //                         console.log(prop + " occurs: " + counts[prop] + " time(s).")
    //                 }
    //         }
    //         //console.log(arrayInput);
    //     // console.log(counts)
    // }

