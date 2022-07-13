// HOME WORK 01 - Menghitung Tahun Bulan Minggu Hari
let totalHari = 485
    tahun = 360
    bulan = 30
    minggu = 7

    qtytahun = Math.floor(totalHari / tahun)
    sisaHari = totalHari % tahun

    qtybln = Math.floor(sisaHari / bulan) 
    sisaHari2 = sisaHari % bulan

    qtymgg = Math.floor(sisaHari2 / minggu)

    qtyhari = sisaHari2 % minggu

// console.log(qtytahun)
// // console.log(sisaHari)
// console.log(qtybln)
// // console.log(sisaHari2)
// console.log(qtymgg)
// console.log(qtyhari)

console.log(`${qtytahun} Tahun ${qtybln} Bulan ${qtymgg} Minggu ${qtyhari} Hari`)

// HOMEWORK - MATEMATIC XYZ
let x = 4
    y = 3
    z = 2

let w1 = x + y * z
    w2 = x * y
let w = Math.pow(w1 / w2, z)

console.log(w)
