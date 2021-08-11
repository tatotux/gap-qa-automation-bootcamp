const isANarcissisticNumber = (number) => {
    if (number <= 0) {
        console.log("Invalid input")
        return false
    } else {
        let digits = number.toString()
        let result = 0

        for (let i = 0; i < digits.length; i++) {
            result = result + Math.pow(parseInt(digits[i]), digits.length)
        }

        if (result == number) {
            return true
        } else return false
    }

}

let number = 153
isANarcissisticNumber(number) ? console.log(`${number} is a narcissistic number`) : 
                                console.log(` ${number} is not a narcissistic number`)