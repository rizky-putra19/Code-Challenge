var splitInParts = function (s, partLength) {
    let result = []

    for ( let i=0; i<s.length; i+=partLength) {
        result.push(s.slice(i, i+partLength))
    }
    return result.join(" ")
}

const s = "supercalifragilisticexpialidocious"
const partLength = 3

console.log(splitInParts(s, partLength))