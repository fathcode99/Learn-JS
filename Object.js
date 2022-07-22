// OBJECT 
// SYNTAX OBJECT
let obj = {
    name : `Apple`,
    price : 10000,
    stock : 9
}

// HOW TO ACCESS VALUE IN OBJECT
console.log(obj.name)
console.log(obj["price"])

// MAKE OBJECT WITH NEW KEYWORD
let obj2 = new Object() // let obj2 = {}
obj2.username = "Juan"
console.log(obj2)

// METHOD
let obj3 = {
    name : `Hafzan`,
    hello : function greet() {
        console.log(`Hi Boz !`)
    }
}
obj3.hello()

let obj4 = {
    name : `Hafzan`,
    greet() {
        console.log(`Hi Boys !`)
    }
}
// How to access method
obj4.greet()

// THIS => keyword yang kita gunakan untuk mengambil value di dalam object 
let obj5 = {
    name : "Kuroko",
    intro : function() {
        console.log("Hello ! My Name is " + this.name)
    }
}
obj5.intro()

// CLASS => 
// WHAT ? cetakan untuk membuat object dengan property yang sama persis dan bisa valuenya berbeda
// WHEN ? ketika kita butuh membuat object dengan property yang sama berkali kali
// WHY ? tentu akan bisa mempermudah dalam membuat object yg sama sehingga tidak perlu membuat object dg properti sama berkali kali
class Artist {
    constructor(nama, kelas, absen) {
        this.nama = nama,
        this.kelas = kelas,
        this.absen = absen 
    }
}

let artist1 = new Artist(`Isyana`, `Mawar`, `23`)
console.log(artist1)

// --------------------
class Murid {
    constructor(nama, kelas, absen) {
        this.nama = nama,
        this.kelas = kelas,
        this.absen = absen 
    }

    intro = () => {
        console.log(`I'm a student`)
    }
}

let murid1 = new Murid(`Isyana`, `Mawar`, `23`)
console.log(murid1)

// INHERITANCE => class untuk membuat class lainnya (cetakan untuk kelas)
class LivingThings {
    constructor(name, age) {
        this.name = name,
        this.age = age,
        this.alive = true
    }

    eat = () => {
        console.log(`eating`)
    }
    breed = () => {
        console.log(breed)
    }
}
// class human di bikin dari class Livingthings
class Human extends LivingThings {
    constructor(name, age, pet) {
        super(name, age)
        this.pet = pet
    }
    work = () => {
        console.log(`work`)
    }
}

// class animal di bikin dari class LivingThings
class Animal extends LivingThings {
    constructor(name, age, fly) {
        super(name, age)
        this.fly = fly
    }

    tail = () => {
        console.log(`tail`)
    }
}

// --------- class animal dari Human dan Human dari LivingThings
class Animal extends Human {
    constructor(name, age, fly) {
        super(name, age)
        this.fly = fly
    }

    tail = () => {
        console.log(`tail`)
    }
}

let human1 = new Human('Budi', 20, 'cat')
let animal1 = new Animal(`Monkey`, 4, false)
console.log(human1)
console.log(animal1)

// INHERITANCE from 2 clas => tidak bisa, kenapa ?
// karena extends hanya bisa di gunakan sekali pakai
// class A1 {
//     constructor(nama) {
//         this.nama = nama
//     }
// }

// class B2 {
//     constructor(umur) {
//         this.umur = umur
//     }
// }

// class Fusion {
//     constructor(nama, umur, hoby) {
//         super(nama)
//         super(umur)
//         this.hoby = hoby
//     }
// }

// let hasil = new Fusion(`Budi`, 20, `Coding`)
// console.log(hasil)

