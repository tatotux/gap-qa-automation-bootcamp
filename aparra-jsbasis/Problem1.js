console.log("*************** Start Problem 1 ***************");
//Multiples of 3 or 5
//Input: num1
//let num1 = 16; //60
let num1 = 10; //23

console.log("Input number: "+num1);

//Function to determine if the lower number are multiples and final sum themultiples
function getTheNumbers(num){
    let mod;
    let sum=0;
    let isMultiple_three=false;
    let isMultiple_five=false;

    //Validate if the number is negative to return 0
    if (num<0){
        console.log("The number is negative")
        return 0;
    }  
    //If the number is positive, then it validates the below numbers  
    for (let i=0;i<num;i++){
        mod=0;
        //Validate if the current number is multiple of 3
        mod=i%3;
        if(mod == 0){isMultiple_three=true;}
        mod=0;
        //Validate if the current number is multiple of 5
        mod=i%5;
        if(mod == 0){isMultiple_five=true;}
        //If the current number is multiple then sum it
        if(isMultiple_three || isMultiple_five){
            sum=sum+i;
            isMultiple_three=false;
            isMultiple_five = false;
        }
        
    }
    return sum;
}

let finalNumber= getTheNumbers(num1);
console.log("The result is: "+finalNumber);

console.log("*************** End Problem 1 ***************");
