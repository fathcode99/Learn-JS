// var, let, const

var name
name = "John"
console.log(name)

let name2 ="Hafzan" // bisa di ganti isinya
name2 = "Hariadi"
console.log(name2)

const name3 = "Jagad"  // cons TIDAK BISA DI GANTI isinya
// name3 = "Paijo" 
console.log(name3)

//Aturan var di javascript
//1. tidak boleh menggunakan spasi cth: stok barang, total price
//2. hanya bisa dimulai menggunakan huruf underscore $
//3. hanya bisa mengandung huruf underscore $ angka
//4. penamaan cukup sensitif, jika huruf besar kecilnya berbeda maka berbeda juga hasilnya

//style atau cara penulisan var
//camel case cth : stockBarang totalPrice kebanyakan pengguna js
//snack case cth : stock_barang total_price kebanyakan pengguna phyton

//kapan kita menggunakan var
//ketika kita mau menggunakan data tersebut lebih dari 1x - agar lebih mudah untuk edit

let kalimat = "Cool"
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)

// Data types
// String
let data = "1234"
let data2 = '1234'
let data3 = `1234`

// Number integers dan float
// Integers
let data4 = 1
// Float
let data5 = 1.5

// Boolean 
// True and Valse
let data6 = true

// Object
let data7 = {
    name: "John",
    age: 12,
    single: true,
}

// Array
let data8 = ["John", 12, true]

// Undefined and Null
let contoh
console.log(contoh)

let contoh2 = null
console.log(contoh2)

// typeof
console.log (typeof "Laptop")

let uji = {
    name : "Andra"
}
console.log (typeof uji)


