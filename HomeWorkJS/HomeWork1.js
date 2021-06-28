
//primer ejercicio

var mul = function (n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
      if ((i % 3 == 0) || (i % 5 == 0)) {
          sum += i;
      }
  }
  console.log(sum);
};


mul(10);

// Segundo ejercicio

function nar_num(num) {
  var getPow = num.toString().split('').map(function(x) {
    return Math.pow(x, num.toString().length);
  });
  var getAccumValue = getPow.reduce(function(a, c) {
	  return a + c;
  });

  return getAccumValue === num;
}

// tercer ejercicio

function maskify(cc) {
  return "#".repeat(Math.max(0, cc.length-4)) + cc.slice(-4);
}

// cuarto ejercicio

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("").every(function(x){
      return string.indexOf(x) !== -1;
  });
}

// Quinto ejercicio

function duplicateCount(text) {
  var nText = text.toLowerCase(); 
  var myObj = {}; 
  var counter = 0;
  for (var i = 0; i < nText.length; i++) {
      if (!myObj[nText[i]]){
          myObj[nText[i]] = 1;
      }
      else if (myObj[nText[i]] < 2) {
          myObj[nText[i]] += 1;
          counter++;
      }
  }
  return counter;
}