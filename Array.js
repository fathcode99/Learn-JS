// ARRAY
// ARRAY SYNTAX
let things = [5, "Book", true, undefined, null, [], {}]
console.log(things.length)
console.log(things[2])

// ACCESS ARRAY 
console.log(things[1])
// console.log(nama variabel[nomer index]) => index di hitung mulai 0

// CHANGE DATA IN ARRAY
things[3] = "pencil"
console.log(things)

// CREATE NEW INDEX 
console.log(things.length)
things[8] = "new index" //Akan menambah space kosong di index ke 7
console.log(things)

// PUSH AND POP
let fruit = ["apel" , "melon" , "pisang"]
fruit.push("durian") // => untuk menambah data baru di space terakhir 
console.log(fruit) 
fruit.pop()
console.log(fruit) // => untuk menghapus data terakhir

// UNSHIFT AND SHIFT
let a = ["guitar","bola","celana"]
a.unshift(10, 20) //untuk menambahkan data baru di awal array
console.log(a)
a.shift()
console.log(a) //untuk menghapus data awal array

// SPLICE ==> untuk mengganti(replace) data array
let number = [1,2,3,4,5,6,7]
// SPLICE UNTUK MENGGANTI
number.splice(1, 3, 7)
// number.splice(a, b, c)
// cara baca : data yang di ganti mulai dari index ke-a di tambah b index, di ganti dg data c 
// res [ 1, 7, 5, 6, 7 ]
console.log(number)
// SPLICE FOR DELETE
let number2 = [1,2,3,4,5,6,7]
number2.splice(1,3)
// cara baca : data yg dhapus mulai index ke a + b index
// res [ 1, 5, 6, 7 ]
console.log(number2)
// SPLICE FOR INSERT
number3 = [1,2,3,4,5,6,7]
number3.splice(1, 0, 9)
console.log(number3)

// DELETE => utk menghapus data array tanpa menghapus index yang digunakan
let b = [1,2,3,4,5,6]
delete b[1]
console.log(b)

// SLICE => untuk mengambil data array
// let c = [1,2,3,4,5,6,7]
// let c2 = c.slice(1,3) //utk mengambil data mulai index 1 sampai index ke 3, tp data ke 3 tdk di ambil
// let c3 = c.slice(2,4) 
// console.log(c2)
// console.log(c3)

// INCLUDES => utk mengecek apakah value tsb ada dalam var array nya
let d = [1,2,3,4,5,6]
console.log(d.includes(2)) // 2 ada dalam array let d
console.log(d.includes(7)) // 7 tidak ada dalam data array let d

//INDEXOF
let e = ["pencil","mouse","computer"]
console.log(e.indexOf("pencil")) // cari no index dari pencil
console.log(e.indexOf("car")) // jika data yg di cari tidak ada maka hasilnya -1

//SORT ==> defaultnya mengurutkan secara ascending
let word = ["zzz","eee","hhhh","kkkk"]
console.log(word.sort())
// console.log(word.sort((a,b) => a-b))
console.log(word.sort((a, b) => b - a)) // => utk data string tdk bisa di descending

let f = [6,2,5,1,3,4]
console.log(f.sort((a,b) => b - a))

//REVERSE => utk membalikan urutan index data, yg awal jadi akhir
let g = [1,2,3,4,5,6,7]
console.log(g.reverse())

// JOIN => utk menggabungkan data di dalam array menjadi string
let h = ["Anton","Budi","Ani","Paijo"]
console.log(h.join(" - "))

//Menggunakan banyak method dalam sekali eksekusi array
let i = ["Anton","Budi","Ani","Paijo"]
let i2 = i.slice(1).sort().join()
console.log(i2)

// CONCATINATING ARRAY => Utk menggabungkan data dari array yg berbeda menjadi satu array
let arr1 = ["apel","mangga"]
let arr2 = ["mouse","keyboard"]
let arr3 = ["pensil","pulpen"]

let arr4 = arr1.concat(arr2)
console.log(arr4)
let arr5 = arr4.concat(arr3)
console.log(arr5)

// ARRAY 2 DIMENSION
let j = [[1,2], [3,4],[5,6], 7, 8]
// how to get 5 ?
console.log(j[2][0,1])

let k = [[1,2], [3,4],[5,6,8], 7, 8]
// how to get 5,6 ?
console.log(k[2][0],j[2][1])