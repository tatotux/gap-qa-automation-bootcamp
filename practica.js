/**
 * First exercise
 * Method that returns the sum of all the multiples of 3 or 5 below the number.
 *
 * @param {*} num The number to raise.
 * @return sum of all the multiples.
 */
function multiples(num) {
    let sum = 0;
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    }
    return 0;
}

/**
 * Third exercise
 * Method that changes all but the last four characters into '#'
 *
 * @param {*} string
 * @return visible last 4 characters and the rest changed into #.
 */
const maskify = string => string.replace(/.(?=.{4})/g, '#');

/**
 * Fourth exercise
 * Method that return true or false if a sentence is a pangram
 *
 * @param {*} string
 * @return true or false
 */
function checkPangram(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~/d]/g;
    const result = string.toLowerCase().replace(regex, '');
    for (let i = 0; i < alphabet.length; i++) {
        if (result.indexOf(alphabet[i]) === -1) {
            return false;
        }
        return true;
    }
}

/**
 * Fifth exercise
 * Method that return the count of all the number of duplicates
 * Incomplete
 * @param {*} string
 * @return the count of duplicates
 */
function getDuplicates(string) {
    var result = {};
    for (let i = 0; i < string.length; i++) {
        if ((string.match(new RegExp(string[i], "g"))).length > 1) {
            result = string.match(new RegExp(string[i], "g")).length;
        }
    }
    return result;
}

console.log(multiples(10));
console.log(checkPangram('The quick brown fox jumps over the lazy dog'));
console.log(getDuplicates('Aa11'));
