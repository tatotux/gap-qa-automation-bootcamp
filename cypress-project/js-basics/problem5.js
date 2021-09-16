function findRepeatedCharacters(sentence){
    let counter = 0
    sentence = sentence.toLowerCase()
    let repeatedCharacters = []
    for(let i = 0; i<sentence.length; i++){
        if(sentence.indexOf(sentence[i]) != sentence.lastIndexOf(sentence[i]) & !repeatedCharacters.includes(sentence[i])){
            repeatedCharacters.push(sentence[i])
            counter = counter +1
        }
    }
    return repeatedCharacters.length
}

console.log(findRepeatedCharacters("abcde"))
console.log(findRepeatedCharacters("aabbcde"))
console.log(findRepeatedCharacters("aabBcde"))
console.log(findRepeatedCharacters("indivisibility"))
console.log(findRepeatedCharacters("Indivisibilities"))
console.log(findRepeatedCharacters("aA11"))
console.log(findRepeatedCharacters("ABBA"))