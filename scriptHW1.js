//Homework 1

//Exercise 1: multiples of 3 and 5 below an specific number
function sumMultiplesBelow(...number){
    if(number<3)return 0;
    let sumMultiples = 0;
    for(let i=3; i<number; i++){
      if(i%3==0 || i%5==0){sumMultiples+=i;}
    }
    return sumMultiples
  }
  
  console.log(sumMultiplesBelow())
  
  //Exercise 2: Narcissistic Number
  function isNarcissistic(number){
      let count = 0;
      let digits = number.toString().split('');
      for(let i=0; i<digits.length; i++)count += Math.pow(digits[i],digits.length)  
      return (count == number ? true : false);
  }
    
  console.log(isNarcissistic(153)) //153 true
  console.log(isNarcissistic(1652)) //1652 false
  
  //Exercise 3: Maskify
  function maskify(password){
    if(password.length<4)return password;
    return password.replaceAll(/[^.]/g, "*").slice(4) + password.slice(-4+password.length);
  }
  
  console.log(maskify("ejnjewncjkneHI"))
  
  
  //Exercise 4: Pangram (sentence using a-z letters at least once)
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'; //IMO it should be a global variable since it has a fixed value
  function isPangram(text){
    let j = 0;
    text = (text.toLowerCase()).split('');
    text.sort();
    for(var i = 0; i < text.length; i++)if(text[i] == alphabet[j])j++;
    return (alphabet.length == j ? true : false);
  }
  
  console.log(isPangram('The quick brown fox jumps over the lazy dog'));
  console.log(isPangram('The quick brown fo jumps over the lazy dog'));
  
  
  //Exercise 5: Count the number of Duplicates
  function countDuplicates(...number){
    let countDuplicates = 0;
    let digits = (number.toString().toLowerCase()).toString().split('');
    digits.sort();
    for(let i = 1; i < digits.length; i++)if(digits[i-1]==digits[i] && digits[i]!=digits[i+1])countDuplicates++;
    return countDuplicates;
  }
  
  console.log(countDuplicates('ABBa'));