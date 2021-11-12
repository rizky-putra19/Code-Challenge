let arr = [1, 2, 3, 4, 5, 6, 7]
let arr1 = [8, 1, 3, 1, 9]
// hapus bilangan ganjil

function hapusGanjil (arr) {
    let newArr = []
	for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] % 2 === 0 ) {
            newArr.push(arr[i])
        }
    }
    return newArr
}



console.log(hapusGanjil(arr1)) // [2, 4, 6]
