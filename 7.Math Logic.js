// ## A. Question
// Buatlah sebuah program sederhana perhitungan gaji bulanan dengan kondisi seperti berikut:

// | Golongan  | Gaji/Jam |
// |----|----------|
// |  A |   1000   |
// |  C |   2000   |
// |  D |   3000   |
// |  E |   4000   |

// - Hint
//  - Rumus : Gaji per golongan * lama bekerja * 30
//  - Kondisi: Jika pegawai bekerja lebih dari 200 jam perbulan tambahkan gaji 200

//  - Input: Nama Pegawai, Golangan A, Lama bekerja 8 Jam

// flow :
// input nama pegawai:
// input golongan pegawai :
// input lama bekerja :

// input nama pegawai :
let inputPegawai = prompt("input nama pegawai ")

//input golongan pegawai
let inputGolongan = prompt("input golongan ")

// input lama bekerja
let inputWorkHour = parseInt(prompt("input jam kerja "))

// rumus golongan * WorkHour dalam satu hari
if (inputGolongan === 'A' ){
    gajiPerGolongan = 1000 * inputWorkHour
} else if (inputGolongan === 'C'){
    gajiPerGolongan = 2000 * inputWorkHour
} else if (inputGolongan === 'D'){
    gajiPerGolongan = 3000 * inputWorkHour
} else if (inputGolongan === 'E'){
    gajiPerGolongan = 4000 * inputWorkHour
} else {
    gajiPerGolongan = "anda memasukkan data yang salah "
}

let daysInMonth = 30
let gajiBulanan = gajiPerGolongan * daysInMonth

let jamLembur = (inputWorkHour * daysInMonth) - 200
if (inputWorkHour * daysInMonth > 200){
    lemburan = jamLembur * 200
} else {
    lemburan = ""
}

let totalKeseluruhan = gajiBulanan + lemburan


document.write(
"nama : " + inputPegawai + "<br></br>" +
"golongan : " + inputGolongan + "<br></br>" +
 "Gaji Perhari : Rp." + gajiPerGolongan + "<br></br>" +
 "Gaji Bulanan : Rp." + gajiBulanan + "<br></br>" +
 "Bonus lembur : Rp. " + lemburan + "<br></br>" +
 "total Keseluruhan : Rp. "  + totalKeseluruhan 
)

