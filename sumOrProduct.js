function sumOrProduct(array, n) {
    const highestNum = array.sort((a,b) => {return a - b}).reverse()
    let highNum = []
    let lowNum = []
    
    for (let i = 0; i < n; i++) {
        highNum.push(highestNum[i])
    }
    
    for (let i = 1; i <= n; i++) {
        lowNum.push(highestNum[highestNum.length-i])
    }
    
    let sumHigh = highNum.reduce((a,b) => a + b)
    let sumLow = lowNum.reduce((a,b) => a * b)


    if ( sumLow > sumHigh) {
        return "product"
    } else if ( sumHigh > sumLow ){
        return "sum"
    } else {
        return "same"
    }
}
const array = [10, 20, 3, 30, 5, 4]
const n = 3

console.log(sumOrProduct(array,n))
