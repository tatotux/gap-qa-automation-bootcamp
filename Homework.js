
/*
Problem #1: 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below
the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once. 
Also, if a number is negative, return 0(for languages that do have them)
*/
function isMultiple3or5(number) {
    let sum
    if (number < 0) {
        return 0
    }
    else {
        let sum = 0
        for (let i = 0; i < number; i++) {
            if ((i % 3 === 0) && (i % 5 === 0) ||
                (i % 3 === 0) || (i % 5 === 0)) {
                sum += i
            }
        }
        return sum
    }
}
console.log("Problem 1", isMultiple3or5(10))
/* Problem 2
A Narcissistic Number is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. In this exercise, 
we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcissistic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
*/
function numDigits(number) {
    let count = 0
    if (number >= 1) ++count;
    while (number / 10 >= 1) {
        number /= 10;
        ++count;
    }
    return count;
}
function narcissistic(number) {
    let power = numDigits(number)
    let digits = number.toString(10)
    let sum = 0
    for (let i = 0; i < power; i++)
        sum += parseInt(digits[i]) ** power
    return (sum === number) ? true : false
}
console.log("Problem 2", narcissistic(1938))
/* Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") ==> "############5616"
maskify("64607935616")              ==>      "#######5616"
maskify("1")                ==>                "1"
maskify( "")                ==>                 ""
// "What was the name of your first pet?"
maskify("Skippy")           ==> "##ippy"
maskify("Nananananananananananananananana Batman!") ==> "####################################man!"
*/
function maskify(string) {
    if (string.length <= 4)
        console.log(string)
    else {
        const unmasked = string.substr(string.length - 4)
        const maskChar = "#"
        const mask = maskChar.repeat(string.length - 4)
        return `${mask}${unmasked}`
    }
}
console.log("Problem 3", maskify("4556364607935616"))
/*Problem 4
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
Ignore numbers and punctuation.
*/
function pangram(string) {
    // [a-z] character within the range
    // ?! once or more with negative lookahead (doesn't match)
    // .* matches any character except for line terminators
    // \1 matches first group again - first group is inside ()
    // gi - case insensitive
    let regex = /([a-z])(?!.*\1)/gi;
    return (string.match(regex)).length === 26;
}
console.log("Problem 4", pangram("The quick brown fox jumps over the lazy dog"))
/*Problem 5
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. The input string can be assumed
 to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0        # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1   # 'i' occurs six times
"Indivisibilities" -> 2     # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2         # 'a' and '1'
"ABBA" -> 2         # 'A' and 'B' each occur twice */
function countDupes(string) {
    let sorted = string.toLowerCase().split("")
    sorted = sorted.sort()
    let dupes = []
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
            if (dupes.includes(sorted[i])) { }
            else {
                dupes.push(sorted[i])
            }
        }
    }
    return dupes.length
}
console.log("Problem 5", countDupes("ABBA"))
