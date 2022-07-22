class Artist {
    constructor(nama, kelas, absen) {
        this.nama = nama,
        this.kelas = kelas,
        this.absen = absen 
    }
}

let artist1 = new Artist(`Isyana`, `Mawar`, `23`)
console.log(artist1.nama)