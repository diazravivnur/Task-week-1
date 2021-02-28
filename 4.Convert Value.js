// ## A. Question
// Buatlah sebuah function dengan parameter integer untuk mengkonversi nilai berdasarkan aturan dibawah ini:


// | Range  | Class |
// |--------|-------|
// | 86-100 |   A   |
// |  70-85 |   B   |
// |  50-69 |   C   |
// |  30-49 |   D   |
// |  0-29  |   E   |

// Input : 80
// Output : Nilai Konversi adalah B

var nilai = prompt ('masukkan nilai')
if ( nilai <= 100 && nilai >= 86) {
    document.write('nilai konversi adalah A')
} else if (nilai  >= 70 && nilai <= 85 ){
    document.write('nilai konversi adalah B')
} else if (nilai  >= 50 && nilai <= 69){
    document.write('nilai konversi adalah C')
} else if (nilai  >= 30 && nilai <= 49){
    document.write('nilai konversi adalah D')
} else if ( nilai >= 0 && nilai <= 29){
    document.write('nilai konversi adalah E')
} else {
    document.write("bilangan yang anda masukkan salah ")
}

//&& bernilai true kalo kedua kondisinya benar
//|| bernilai true kalo salah satu kondisinya benar

