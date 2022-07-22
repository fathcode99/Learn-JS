// let tanggal = new Date()
// console.log(tanggal)
// console.log(tanggal.getFullYear())
// console.log(tanggal.getMonth())
// console.log(tanggal.getDay())
// console.log(tanggal.getHours())

// TARGET OUTPUT = "Sekarang adalah Bulan Juli 2022"
let tanggal = new Date()

let bulan = tanggal.getMonth()
let year = tanggal.getFullYear()
let day = tanggal.getDay()
if (day == 0) {
    day = `Minggu`
} else if (day == 1){
    day = `Senin`
}
else if (day == 2){
    day = `Selasa`
}
else if (day == 3){
    day = `Rabu`
}
else if (day == 4){
    day = `Kamis`
}
else if (day == 5){
    day = `Jumat`
}
else if (day == 6){
    day = `Sabtu`
}

let Hours = tanggal.getHours()
let minutes = tanggal.getMinutes()
let base = `Saat ini adalah bulan `
if (bulan == 0 ) {
    console.log(`${base}` + `Januari ` + `${year}`)
} else if (bulan == 1 ) {
    console.log(`${base}` + `Februari ` + `${year}`)
} else if (bulan == 2 ) {
    console.log(`${base}` + `Maret ` + `${year}`)
} else if (bulan == 3 ) {
    console.log(`${base}` + `April ` + `${year}`)
} else if (bulan == 4 ) {
    console.log(`${base}` + `Mei ` + `${year}`)
} else if (bulan == 5 ) {
    console.log(`${base}` + `Juni ` + `${year}`)
} else if (bulan == 6) {
    console.log(`${base}` + `Juli ` + `${year} ` + `${day} ` + `${Hours}:` + `${minutes}`)
} else if (bulan == 7 ) {
    console.log(`${base}` + `Agustus ` + `${year}`)
} else if (bulan == 8 ) {
    console.log(`${base}` + `September` + `${year}`)
} else if (bulan == 9 ) {
    console.log(`${base}` + `Oktober ` + `${year}`)
} else if (bulan == 10 ) {
    console.log(`${base}` + `Nopember` + `${year}`)
} else if (bulan == 11 ) {
    console.log(`${base}` + `Desember ` + `${year}`)
}
