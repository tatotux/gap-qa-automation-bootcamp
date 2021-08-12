console.log("*************** Start Problem 4 ***************");
//Count the number of characters that occur more than once in a phrase 
//input value
//let inputValue="abcdaalaa1a"; //
let inputValue="abcdaalaa1a##**l"; //
//let inputValue="abcde" //-> 0 # no characters repeats more than once
//let inputValue="aabbcde" //-> 2 # 'a' and 'b'
//let inputValue="aabBcde" //-> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//let inputValue="indivisibility" //-> 1 # 'i' occurs six times
//let inputValue="Indivisibilities" //-> 2 # 'i' occurs seven times and 's' occurs twice
//let inputValue="aA11" //-> 2 # 'a' and '1'
//let inputValue="ABBA" //-> 2 # 'A' and 'B' each occur twice

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9",];
let countCharsDuplicates=0;

function getCountCharsDuplicate(){ 
    let countPerchar;
    for (let i=0;i<alphabet.length;i++){
        countPerCharacter=0;
        /*The split() method divides a String into an ordered 
        list of substrings, puts these substrings into an array*/
        countPerCharacter=inputValue.split(alphabet[i]).length - 1
        //console.log(alphabet[i]+" - "+countPerCharacter);
        //sum of the chars when it is at least twice on the string
        if(countPerCharacter>=2)countCharsDuplicates+=1;

    }    
}

console.log("This is the input value: "+inputValue)
//The input value is converted to lower case
inputValue=inputValue.toLowerCase();
//console.log(inputValue);
//Get the number of alphabet chars and numeric chars duplicates
getCountCharsDuplicate();

console.log("The count of duplicates characters is: "+countCharsDuplicates)

console.log("*************** End Problem 5 ***************");

