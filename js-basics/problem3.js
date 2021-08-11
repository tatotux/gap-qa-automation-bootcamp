const maskify = (stringToMaskify) => {

    if(stringToMaskify.length > 4){
        let unmaskedString = stringToMaskify.slice(-4)
        let maskedString = '#'.repeat(stringToMaskify.length-4)    
        return maskedString + unmaskedString
    }
    else return stringToMaskify
}

console.log(maskify("maskedstring"))
console.log(maskify("4556364607935616"))
console.log(maskify("64607935616"))
console.log(maskify("1"))
console.log(maskify(""))
console.log(maskify("Skippy"))
console.log(maskify("Nananananananananananananananana Batman!"))