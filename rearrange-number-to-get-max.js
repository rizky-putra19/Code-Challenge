var maxRedigit = function (num) {
    const splitNum = (""+num).split("").map(Number)

    if (num == -1 || num == 0 || splitNum.length > 3 || splitNum.length < 3) {
        return null
    }

    const maxNum = (""+num).split("").map(Number).sort((a,b) => b - a).join("")

    return parseInt(maxNum)
};

const num = 1000;

console.log(maxRedigit(num))