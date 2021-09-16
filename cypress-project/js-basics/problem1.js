const solution = (limit, numbers) => {
    let sum = 0
    if (limit > 0) {
        //Eliminamos números negativos si existen
        numbers = numbers.map(function (number) {
            if (number > 0) return number
        })

        for (let i = 1; i < limit; i++) {
            numbers.some(function (element, index) {
                if (i % element == 0) {
                    sum = sum + i
                    return true
                }
            })
        }
    }

    return sum
}

console.log(solution(10, [3, 5]))
console.log(solution(16, [3, 5]))
console.log(solution(0, [3, 5]))
console.log(solution(-1, [3, 5]))
console.log(solution(20, [3, -1, 5, -2]))