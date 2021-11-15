var removeVowels = function(str){
    let splitStr = str.split("")
    let result = []
    
    for (let i=0; i < str.length; i++) {
        if (
            splitStr[i] !== "a" &&
            splitStr[i] !== "i" &&
            splitStr[i] !== "u" &&
            splitStr[i] !== "e" &&
            splitStr[i] !== "o"
            ) {
                result.push(splitStr[i])
            } 
        }
    return result.join("")

    }

const str = "drake"

console.log(removeVowels(str))