// ## A. Question
// Buatlah sebuah program konversi suhu celcius, reamur, fahrenheit dan kelivin.


// Flow
//  1. Pilih Suhu
//  2. Inputkan nilai
//  3. Pilih Suhu konversi
//  4. Tampilkan hasil konversi

let pilihSuhu = prompt("Silahkan pilih suhu : celsius, reamur, fahrenheit, kelvin")
let masukkanAngka = parseInt(prompt("Silahkan input angka"))
let pilihKonverter = prompt("Silahkan pilih convert ke mana: celsius, reamur, fahrenheit, kelvin") 
var hasil = ""
    // celsius
if (pilihSuhu === pilihKonverter){
    hasil = masukkanAngka
} else if(pilihSuhu === "celsius" && pilihKonverter === "reamur") {
    hasil = masukkanAngka * 4 / 5
} else if (pilihSuhu === "celsius" && pilihKonverter === "kelvin"){
    hasil = masukkanAngka + 273
} else if (pilihSuhu === "celsius" && pilihKonverter === "fahrenheit"){
    hasil = 9 / 5 * masukkanAngka + 32 

    // reamur 
} else if (pilihSuhu === "reamur" && pilihKonverter === "celsius"){
    hasil = 5 / 4 * masukkanAngka
} else if (pilihSuhu === "reamur" && pilihKonverter === "kelvin"){
    hasil = 5 / 4 * masukkanAngka + 273
} else if (pilihSuhu === "reamur" && pilihKonverter === "fahrenheit"){
    hasil = 9 / 4 * masukkanAngka + 32

    // fahrenheit
} else if (pilihSuhu === "fahrenheit" && pilihKonverter === "celsius"){
    hasil = 5 / 9 * (masukkanAngka - 32) 
} else if (pilihSuhu === "fahrenheit" && pilihKonverter === "reamur"){
    hasil =  4 / 9 * (masukkanAngka - 32)
} else if (pilihSuhu === "fahrenheit" && pilihKonverter === "kelvin"){
    hasil =  5 / 9 * (masukkanAngka - 32) + 273

    //kelvin
} else if (pilihSuhu === "kelvin" && pilihKonverter === "celsius"){
    hasil = masukkanAngka - 273 
} else if (pilihSuhu === "kelvin" && pilihKonverter === "reamur"){
    hasil = 4 / 5 * (masukkanAngka - 273) 
} else if (pilihSuhu === "kelvin" && pilihKonverter === "fahrenheit"){
    hasil = 9 / 5 * (masukkanAngka - 273) +32 
} else {
    document.write ("angka yang anda masukkan salah")
}
document.write("Hasil konversi dari " + pilihSuhu + " ke " + pilihKonverter + " adalah " + hasil)

