// ## A. Question
// Buatlah function sederhana untuk deret angka yang menerima parameter berapa banyak deret yang ditampilkan dengan kondisi:

// - Naik 1 Angka

// Input: 15 
// Output: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
function tambahAngka (a) {
    var i;
    var emptyArray = []
    var text = ""
    for (i = a; i <= emptyArray; i--) {
        text += emptyArray[i] + "<br>";
    };
};
document.write(tambahAngka(15))

// - Kuadrat
// Input: 15 
// Output: 1 4 9 16 25 36 49 64 81 100 121 144 169 196 225

// - Kelipatan 3
// Input: 20 
// Output: 3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60

function tambahAngka (a) {
    return a ++ 
}