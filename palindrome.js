// var isValid = function (s) {
//     let splitS = s.split("")
//     console.log("🚀 ~ file: palindrome.js ~ line 3 ~ isValid ~ splitS", splitS)
//     let lastStr = []
//     console.log("🚀 ~ file: palindrome.js ~ line 5 ~ isValid ~ lastStr", lastStr)


//     for (let i = 0; i < s.length; i++) {
//         let nextStr = lastStr[lastStr.length - 1]

//         if (
//             s[i] == "(" ||
//             s[i] == "{" ||
//             s[i] == "["
//         ) {
//             lastStr.push(s[i])
//         } else if (
//             (nextStr == "(" && s[i] == ")") ||
//             (nextStr == "{" && s[i] == "}") ||
//             (nextStr == "[" && s[i] == "]")
//         ) {
//             lastStr.pop()
//         }
//         else {
//             return false
//         }
//         return lastStr ? false : true
//     }
// }



const isValid = (s) => {
    const stack = [];

    for (let i = 0; i < s.length; i += 1) {
        const top = stack[stack.length - 1];
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
            stack.pop();
        } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
            stack.pop();
        } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};

const s = ""
const t = s.length
console.log(isValid(s))
