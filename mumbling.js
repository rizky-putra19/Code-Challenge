function accum(s) {
    // your code
    let splitWord = s.split('')

    return splitWord.map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}

console.log(accum("abcd"))