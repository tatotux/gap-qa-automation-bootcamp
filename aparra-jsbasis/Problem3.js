console.log("*************** Start Problem 3 ***************");
//Maskify Number
let inputValue ="4556364607935616"; //==> "############5616"
//let inputValue ="64607935616"  //==> "#######5616"
//let inputValue ="1"; //==> "1"
//let inputValue =""; //==> ""
//let inputValue ="Skippy" //==> "##ippy"
//let inputValue ="Nananananananananananananananana Batman!"; //==>"####################################man!"
//let inputValue ="1234";//==> "1234"

const fragmInputVal=[];
const charsNoMaskify=4;
const charToMask="#"
let resultValue="";

//Takes the string and put it into an array
function getEachChar(value){ 
    for (let i=0;i<value.toString().length;i++){
        fragmInputVal.push(value.toString().charAt(i));
    }    
}

//Apply the mask in the String
function getMaskify(fragmInputVal){ 
    for (let i=0;i<fragmInputVal.length-charsNoMaskify;i++){
        resultValue=resultValue+charToMask;
    }   
    for (let i=fragmInputVal.length-charsNoMaskify;i<fragmInputVal.length;i++){
        resultValue=resultValue+fragmInputVal[i];
    }  
}

console.log("The input value is: "+inputValue);
getEachChar(inputValue);

//Validate if the string can be masked
if(fragmInputVal.length>charsNoMaskify){
    getMaskify(fragmInputVal);
}else{
    resultValue=inputValue;
}


resultValue="\""+resultValue+"\"";
console.log("The value already masked is: "+resultValue);
console.log("*************** End Problem 3 ***************");