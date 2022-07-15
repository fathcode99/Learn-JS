let massa = 100,
    tinggi = 1.27,
    imt = massa / tinggi ** 2
    

if (imt < 18.5 ) {
    notif = `Berat badan Kurang`
} else if (imt > 18.5 && imt < 24.9) {
    notif = `Berat badan ideal`
} else if (imt > 25.0 && imt < 29.9) {
    notif = `Berat Badan Berlebih`
} else if (imt > 30.0 && imt < 39.9) {
    notif = `Berat Badan Sangat berlebih`
} else if (imt > 39.9) {
    notif = `Obesitas Bos !`
}

console.log(notif)

