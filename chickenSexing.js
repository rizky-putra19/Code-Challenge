function correctness(bobsDecisions, expertDecisions) {
    let result = 0;
    const bobAnswer = bobsDecisions.sort();
    console.log("🚀 ~ file: chickenSexing.js ~ line 4 ~ correctness ~ bobAnswer", bobAnswer)
    const expertAnswer = expertDecisions.sort()
    console.log("🚀 ~ file: chickenSexing.js ~ line 6 ~ correctness ~ expertAnswer", expertAnswer)

    for (let i = 0; i < bobAnswer.length; i++) {
        if (bobAnswer[i] == expertAnswer[i]) {
            result += 1
        } else if (bobAnswer[i] == '?' && expertAnswer[i] == '?') {
            result += 1
        } else if (bobAnswer[i] == '?' || expertAnswer[i] == '?') {
            result += 0.5
        }
    }

    return result
}

const bobsDecisions = ['?','M','F','M','F','F'];
const expertDecisions = ['M','F','M','M','M','M'];

console.log(correctness(bobsDecisions, expertDecisions));