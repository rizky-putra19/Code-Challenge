function getEvenNumbers(numbersArray) {
    let evenNum = [];

    for(let i=0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 == 0) {
            evenNum.push(numbersArray[i])
        }
    }

    return evenNum
}

const numbersArray = [1, 2, 3, 6, 8, 10];

console.log(getEvenNumbers(numbersArray))