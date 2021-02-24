// // A. Question
// Buatlah sebuah function untuk memprint text berdasarkan parameter yang diinputkan pada console. Setelah itu buatlah masing-masing bentuk:

// - Regular Function
// - Arrow Function

// Regular Function with Params
function tanyaTetangga (nama, alamat) {
    return "halo bang " + nama + " saya mau nanya, kalo " + alamat + "itu dimana ya ?" + "<br></br>"
}
document.write(tanyaTetangga("Mansur", "Jalan Kenangan"))

// Arrow Function with Params
var perkalian
perkalian = (a, b) => {
    return hasilKali = a * b
    
}
document.write(perkalian(2,7))