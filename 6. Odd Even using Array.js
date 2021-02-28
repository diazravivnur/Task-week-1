// // ## A. Question
// Buatlah sebuah function yang menerima parameter array untuk mencek bilangan ganjil atau genap kemudian mencetak output seperti berikut.

// - Input : [1,2,3,4,5,6,7,8]
// - Output : [Ganji,Genap,Ganji,Genap,Ganji,Genap,Ganji,Genap]

// let number = [1,2,3,4,5,6,7,8]
// // const permisalan = if (number % 2 == 0){
// //     document.write("genap")
// // } else (document.write("ganjil"))

// for (number = 1; number <= 8; number++){
//     if (number % 2 == 0){
//         document.write("genap")
//     } else (document.write("ganjil"))

// for (let i = 1; i <= a; i++) {
//     document.write (i*3 + "<br></br>")
// };
// (diKuadratin(15))
function iniFungsi(a){
    for (a = 1; a <= 8; a++){
        if (a % 2 == 0){
            document.write('genap' + "<br></br>")
        }else (document.write('ganjil' + "<br></br>"))
    }
}
iniFungsi([1,2,3,4,5,6,7,8])