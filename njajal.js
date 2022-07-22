// let obj = {
//     name : `Apple`,
//     price : 10000,
//     stock : 9
// }
// console.log(obj.name)
// console.log(obj["price"])

// let obj2 = {}
// let obj2 = new Object() // let obj2 = {}
// // obj2.username = "Juan"
// obj2 = {
//     username : "Juan"
// }
// console.log(obj2)


// let i = ""
// i = "Fathur"
// console.log(i)

class Artist {
    constructor(nama, kelas, absen) {
        this.Nama = nama,
        this.Kelas = kelas,
        this.Absen = absen 
    }
}

let artist1 = new Artist(`Isyana`, `Mawar`, `23`)
let artist2 = new Artist(`Andi`, `Flower`, 22)
console.log(artist1)
console.log(artist2)