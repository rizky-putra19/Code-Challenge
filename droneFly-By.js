function flyBy(lamps, drone) {
    const result = []

    for (let i = 0; i < lamps.length; i++) {
        if (drone[i] == '=' || drone[i] == 'T') {
            result.push('o')
        } else {
            result.push('x')
        }
    }

    return result.join('')
}

const lamps = 'xxxxxxxxx';
const drone = '==T';

console.log(flyBy(lamps, drone))