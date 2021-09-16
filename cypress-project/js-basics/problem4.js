function pangramDetector(sentence){
    
    let alphabet = "abcdefghyjklmnopqrstuvwxyz"
    for (let i = 0; i < alphabet.length; i++){
       if(sentence.toLowerCase().indexOf(alphabet[i]) == -1){
           console.log(alphabet[i])
           return false
       } 
    }
    return true
}

let sentence = "The quick brown fox jumps over the lazy dog"
//Cadena de prueba con espacios y puntuación: "zab 123cdefghyjk. lmnopq! rstuv wxyz"

if(pangramDetector(sentence)){
    console.log(`${sentence} is a pangram`)
} else console.log(`${sentence} is not a pangram`)