// ## A. Question
// Terdapat array yang berisikan score hasil ujian siswa, tentukan nilai terendah, nilai tertinggi dan nilai rata-ratanya


// - Input : [80,45,30,45,70,70,80,90,91,88,80,83]
// - Output : Nilai Min, Nilai Max, Nilai Rata-rata

const arr = [80,45,30,45,70,70,80,90,91,88,80,83];

// diurutkan dari kecil ke besar menggunakan method array.sort 
const urutArray = arr.sort(function(a, b){return a-b})

// karena sudah diurutkan, maka index pertama dari array tsb adalah nilai terkecil dari seluruh index
const nilaiMin = urutArray[0];

// karena sudah diurutkan, maka index terakhir dari array tsb adalah nilai terbesar dari seluruh index
const nilaiMax = urutArray[urutArray.length - 1]

// untuk mencari rata rata, menggunakan rumus jumlah dari seluruh index dibagi dengan banyak index
const jumlahArr = arr.reduce(function(a,b) {return a + b})
const nilaiAvg = jumlahArr / arr.length

document.write(
"dengan input array " + arr + "<br></br>" +
"nilai min dari input tersebut adalah " + nilaiMin + "<br></br>" +
'nilai max dari input tersebut adalah ' + nilaiMax + "<br></br>" +
'nilai rata rata dari input tersebut adalah ' + nilaiAvg + "<br></br>")
