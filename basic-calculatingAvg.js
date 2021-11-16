var Calculator = {
    average: function (...arr) {
        if(arr.length == 0) {
            return 0
        }

        return arr.reduce((a,b) => a + b, 0) / arr.length
    }
};

console.log(Calculator.average())