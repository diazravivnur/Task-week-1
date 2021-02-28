// ## A. Question
// Buatlah sebuah function yang menerima parameter untuk mencek apakah bilangan tersebut prima atau bukan !

// - Input : 23
// - Output : 23 adalah bilangan Prima

function angka (i) {
    if (i == 2 || i == 3 || i == 5|| i % 2 != 0 && i % 3 != 0 && i % 5 !=0 && i % 7 != 0){
        document.write(i + " adalah bilangan prima")
    } else {
        document.write(i + " bukan bilangan prima")
    }
}
angka(prompt("masukkan Nilai "))
// }
// for (let i = 2 ; i<=100; i++){
//     if (i == 2 || i == 3 || i == 5|| i % 2 != 0 && i % 3 != 0 && i % 5 !=0 && i % 7 != 0){
//         document.write(i + "<br></br>")
//     } 
// }
// if (cekAngka % 2 == 0 || cekAngka % 3 !== 0 || cek) {
//     console.log("ini angka prima")
// }else {
//     document.write(cekAngka + "ini bukan bilangan prima ")
// };


// Bilangan prima adalah bilangan yang hanya bisa dibagi dengan angka 1 atau bilangan itu sendiri
// modulus itu habis dibagi
//  45 33 35