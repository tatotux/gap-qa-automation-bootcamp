console.log("*************** Start Problem 4 ***************");
//Pangram
//input value section
//let inputValue="abcdaaaa1#"; //The input value is not a Pangram
//let inputValue="abcdlaaaa1#"; //The input value is not a Pangram
//let inputValue="12.5m"; //The input value is not a Pangram
//let inputValue="The quick brown fox jumps over the lazy dog"; //The input value is a Pangram
let inputValue="The quick-2#%$&#5665 lalalala brown fox jumps over the lazy dog"; //The input value is a Pangram

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
const fragmInputVal=[];

//Execute somr functions over the string 
function organizeTheInputValue(value){ 

    //Remove the numbers and special characters
    //g at the end indicates iterative searching throughout the full string
    ///[^a-zA-Z ]/ that means: just acepted the alphabet in lower and in upper case
    value=value.replace(/[^a-zA-Z ]/g, "");
    console.log("The input value without special characters and numbers is: "+value);

    //Convert the string to lowercase letters
    value=value.toLowerCase();
    console.log("The input value in lower case is: "+value);

    //Remove the spaces
    //\s that indicates spaces
    //g at the end indicates iterative searching throughout the full string
    value=value.replace(/\s+/g, '');
    console.log("The input value without spaces is: "+value);
    return value;   
}
//Takes the string and put it into an array
function getEachChar(value){ 
    for (let i=0;i<value.toString().length;i++){
        fragmInputVal.push(value.toString().charAt(i));
    }    
}
//Remove the suplicates letters 
function removeDuplicatesChars(inputValArray){ 
    let result = [];
    inputValArray.forEach((inputCharacter)=>{
    	//pushes only unique element
        if(!result.includes(inputCharacter)){
    		result.push(inputCharacter);
    	}
    })
    return result;
}

//Validate the two arrays to confirm that all the alphabet letters are in the input value
function validateTheAlphabet(value){ 
    for (let i=0;i<alphabet.length;i++){
        if(alphabet[i]!==value[i]){
            return false;
        }          
    }  
    return true;

    //This solution also works and it is shorter 
    // if(JSON.stringify(value)===JSON.stringify(alphabet)) return true;
    // else return false;
}

console.log("The input value is: "+inputValue)
//Organize the input value: No spaces, no special characters, no numbers,, all in lower case
let inputWoutnumsc = organizeTheInputValue(inputValue);

//it takes the input value and push each character into an array 
getEachChar(inputWoutnumsc);

//Remove all the duplicate letters
let arrayWoutDuplicates= removeDuplicatesChars(fragmInputVal);

//order the array 
arrayWoutDuplicates.sort();
console.log("Array ordered and it has not duplicates: "+arrayWoutDuplicates); 

//Validate the two arrays to confirm that all the alphabet letters are in the input value
if(validateTheAlphabet(arrayWoutDuplicates)) console.log("The input value is a Pangram");
else console.log("The input value is not a Pangram");

//console.log(alphabet);
//console.log(arrayWoutDuplicates);
console.log("*************** End Problem 4 ***************");

