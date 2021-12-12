// function grid(N) {
//     let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//     if(N < 0) {
//         return null
//     } else if(N == 0) {
//         return ''
//     } else if (N == undefined) {
//         return 'a'
//     }

//     for (let i = 0; i < N; i++) {
//         let result = alphabet.slice(0, N)
//         alphabet.shift()
//         console.log(result.join(' '))
//     }
// }

// grid(4)

function grid(N) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'.repeat(8)
    return N < 0 ? null : Array.from({ length: N }, (_, i) => [...abc.substr(i, N)].join(' ')).join('\n')
}

console.log(grid(100))