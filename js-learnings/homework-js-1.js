const solution1 = (num) => {
    if (num < 0) return 0;
    let res = 0
    for (let i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            res += i
        }
    }
    return res
}

const solution2 = (num) => {
    let array = num.toString().split("")
    let res = 0
    array.forEach(element => {
        res += element ** array.length
    });
    return res == num
}

const solution3 = (string) => {
    let array = string.toString().split("")
    let len = array.length
    let res = ""
    for (let i = 0; i < len; i++) {
        res += len - 4 <= i ? array[i] : "#"
    }
    return res
}

const solution4 = (sentence) => {
    return Array.from(new Set(sentence.toLowerCase().replace(/[0-9\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(""))).length == 26
}

const solution5 = (string) => {
    let array = string.toLowerCase().split("")
    let first = []
    let repeated = []
    let rep = 0
    array.forEach(element => {
        if (!(first.includes(element))) {
            first.push(element)
        }
        else if (!(repeated.includes(element))) {
            repeated.push(element)
            rep++
        }
    });
    return rep
}



console.log(solution5("abcde"))

