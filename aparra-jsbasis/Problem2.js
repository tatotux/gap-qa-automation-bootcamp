console.log("*************** Start Problem 2 ***************");
//Narcissistic Number
let nump2 =153; //153 narcissistic: yes
//let nump2 =1652 //--1938  narcissistic:No ;
//let nump2 ="abcd" //String - narcissistic: not applicable ;
//let nump2 =-5 //Negative - narcissistic: not applicable ;
//let nump2 = 12.5 //Float number -narcissistic: not applicable ;

let sumOfPowers=0;
let isNarcissistic= false;
let passValidations;
const fragmNumbers=[];

//Execute some validations on the input value
function executeValidations(number) {
    if(number<=0){
        console.log("The number should be positive and greater than 0");
        passValidations = false;
        return;
    } 
    if(!Number(number)){
        console.log("The value sent ("+number+") is not a number");
        passValidations = false;
        return;
    }
    if(number%1 !== 0){
        console.log("The number should be int");
        passValidations = false;
        return; 
    }
   passValidations = true;
}

//Get the number of digits 
function getlength(number) {
    return number.toString().length;
}

//Get each digit from the input value and put it into an array
function getEachDigit(number){
    
    for (let i=0;i<number.toString().length;i++){
        fragmNumbers.push(number.toString().charAt(i));
    }    
}

//Funtion to defina if the input value is Narcissistic or not
function getIfThenumberIsNarcissistic(){
    let raisePower;
    for (let i=0;i<fragmNumbers.length;i++){
        raisePower=fragmNumbers[i];
        //console.log("i: "+fragmNumbers[i]);
        for (let ind=0;ind<numOfDigits-1;ind++){
            raisePower = raisePower*fragmNumbers[i];                       
        }
        sumOfPowers=sumOfPowers+raisePower;
    }    
    console.log("Sum of each digit raised to the power: "+sumOfPowers);
    if(sumOfPowers==nump2)return isNarcissistic=true;
    else return isNarcissistic;
    
}

console.log("Input number: "+nump2);
executeValidations(nump2);
let numOfDigits;
if(passValidations){
    //Get the number of digits 
    numOfDigits = getlength(nump2);
    console.log("numOfDigits: "+numOfDigits);
    //Get each number of the main number 
    getEachDigit(nump2);
    getIfThenumberIsNarcissistic();

    if(isNarcissistic)console.log("The number "+nump2+" is Narcissistic");
        else console.log("The number "+nump2+" is not Narcissistic");
}


console.log("*************** End Problem 2 ***************");