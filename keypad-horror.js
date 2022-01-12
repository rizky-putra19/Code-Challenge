function computerToPhone(numbers) {
    const splitNum = numbers.split('')
    const result = []

    for (let i = 0; i <= splitNum.length; i++) {
        if (splitNum[i] == 0) {
            result.push('0')
        }
        else if (splitNum[i] == '1') {
            result.push('7')
        }
        else if (splitNum[i] == '2') {
            result.push('8')
        }
        else if (splitNum[i] == '3') {
            result.push('9')
        }
        else if (splitNum[i] == '4') {
            result.push(splitNum[i])
        }
        else if  (splitNum[i] == '5') {
            result.push(splitNum[i])
        }
        else if (splitNum[i] == '6') {
            result.push(splitNum[i])
        }
        else if (splitNum[i] == '7') {
            result.push('1')
        }
        else if (splitNum[i] == '8') {
            result.push('2')
        }
        else if (splitNum[i] == '9') {
            result.push('3')
        }
    }

    return result.join('')
}

const numbers = "0789456123";

console.log(computerToPhone(numbers));