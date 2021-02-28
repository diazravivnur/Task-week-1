// ## A. Question
// Buatlah sebuah program sederhana untuk menetukan umur seseorang apakah dia bayi, anak-anak, remaja, dewasa atau lansia berdasarkan aturan dibawah ini:


// | Nama        | Umur / Tahun |
// |-------------|--------------|
// |     Bayi    |      0-1     |
// |  Anak-anak  |     2-10     |
// |    Remaja   |     11-19    |
// |    Dewasa   |     20-60    |
// | Lanjut Usia |       E      |

// Input: 3
// Output: Umur 3 tahun adalah Anak-anak

let umur = prompt("Masukkan umur")
if (umur >=0 && umur <=1){
    document.write("Umur " + umur + " tahun adalah Bayi")
} else if (umur >=2 && umur <=10){
    document.write("Umur " + umur + " tahun adalah Anak-Anak")
} else if (umur >=11 && umur <=19){
    document.write("Umur " + umur + " tahun adalah Remaja")
} else if (umur >=20 && umur <=60){
    document.write("Umur " + umur + " tahun adalah Dewasa")
} else {
    document.write("Umur " + umur + " tahun adalah Lanjut Usia")
};

// var nilai = prompt ('masukkan nilai')
// if ( nilai <= 100 && nilai >= 86) {
//     document.write('nilai konversi adalah A')
// } else if (nilai  >= 70 && nilai <= 85 ){
//     document.write('nilai konversi adalah B')
// } else if (nilai  >= 50 && nilai <= 69){
//     document.write('nilai konversi adalah C')
// } else if (nilai  >= 30 && nilai <= 49){
//     document.write('nilai konversi adalah D')
// } else if ( nilai >= 0 && nilai <= 29){
//     document.write('nilai konversi adalah E')
// } else {
//     document.write("bilangan yang anda masukkan salah ")
// }

