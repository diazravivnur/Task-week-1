// //A. Question
// Buatlah sebuah function untuk membalikkan angka yang diinputkan.
// - Input : 1234
// - Output: 4321

// function reverseAngka ([a, b, c, d]) {
//     return [d, c, b, a]
// }
// document.write(reverseAngka([1, 2, 3, 4]))

// function reverseAngka(number) {
//     var jadiArray = Array.from(number)
//     return jadiArray 
// }
// console.log(reverseAngka(1234))


let a = prompt("masukan nilai")
var myArr = Array.from(a); 
var diReverse = myArr.reverse(" ")
document.write(diReverse)


