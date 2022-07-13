// String 
let str = "Javascript"

// escape character
let a ="Wait, I'll be in there"
console.log(a)
let b ='Wait, I\'ll be in there'
console.log(b)
let c =`Wait, I'll be in there`
console.log(c)
let d =`Hello \n World!`
console.log (d)
let e =`Hello \t World!`
console.log (e)

// Concatinate String
let firstName ="Nicole"
let lastName ="Sadjoli"
console.log(firstName + lastName)
console.log(firstName + ' ' + lastName)

let angka ="80"
let str2 = 12
console.log(angka + str2, typeof (angka + str2))

// Backtick
let first_name = "Anton"
let last_name = "Ani"
console.log(`${first_name} ${last_name}`)


// string preperties and method
let x = `Hello World`
// index adalah urutan , di mulai dari 0
console.log(x.length)
console.log(x.indexOf(`World`)) //untuk mengetahui index/urutan keberapa kata World muncul
console.log(x.substr(0, 5)) // untuk mengambil mulai index ke 0 SEBANYAK 5 buah/huruf
console.log(x.slice(6, 11)) // Untuk mengambil mulai index ke 6 SAMPAI KE 11
console.log(x.split('')) //mau di pisah berdasarkan apa - yg ini tanpa spasi
console.log(x.split(' ')) //mau di pisah berdasarkan apa - yg ini dengan spasi
console.log(x.split('l')) //mau di pisah berdasarkan apa - yg ini dengan huruf l

let y =`hello`
let z =`WORLD`
console.log(y.toUpperCase())
console.log(z.toLowerCase())
console.log(y.replace('l','z'))
console.log(y.replace(/l/g,'z'))
console.log(y.replace('ll', 'n'))

// contoh string untuk mengganti e dan o
let res = y.replace ('e', 'n')
let res2 = res.replace ('o', 'n')
console.log(res2)

let text = `Hello World`
console.log(text.includes(`Hello`)) 
console.log(text.includes('hello'))
//Apakah di dalam text terdapat kata 'World', hati2 ini sensitif beda besar kecil akan false