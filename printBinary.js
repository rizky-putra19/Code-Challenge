function printBinary(n) {
    let a = []
    let b = []

    for (let i = 1; i <= n; i++) {
        if(i % 2 !== 0) {
            a.push(0)
            b.push(1)
        } else {
            a.push(1)
            b.push(0)
        }
    }

    for (let i = 1; i <= n; i++) {
        if(i % 2 !== 0) {
            console.log(a.join(""))
        } else {
            console.log(b.join(""))
        }
    }
}

const n = 5

printBinary(n)
