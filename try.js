// CREATE NEW INDEX 
// let things = [5, "Book", true, undefined, null, [], {}]
// things[8] = "new index" //Akan menambah space kosong di index ke 7
// console.log(things)



let a = ["guitar","bola","celana"]

// a.unshift(10, 20) //untuk menambahkan data baru di awal array
// console.log(a)

// a.shift()
// console.log(a) //untuk menghapus data awal array

// let number = [1,2,3,4,5,6,7]
// // SPLICE UNTUK MENGGANTI
// number.splice(2, 2, 5)
// console.log(number)

// let number2 = [1,2,3,4,5,6,7]
// number2.splice(2,4)
// console.log(number2)


// number3 = [1,2,3,4,5,6,7]
// number3.splice(5, 1, 8, 9, 10)
// console.log(number3)

// let b = [1,2,3,4,5,6]
// delete b[1]
// console.log(b)

// let c = [1,2,3,4,5,6,7]
// let c2 = c.slice(3,5) //utk mengambil data mulai index 1 sampai index ke 3, tp data ke 3 tdk di ambil
// let c3 = c.slice(2,4) 
// console.log(c2)
// console.log(c3)

// let e = ["pencil","mouse","computer"]
// // console.log(e.indexOf("mouse")) // cari no index dari pencil
// console.log(e.indexOf("car"))

// let word = ["zzz","eee","hhhh","kkkk"]
// console.log(word.sort())

// let g = [1,5,2,3]
// console.log(g.reverse())

// let h = ["Anton","Budi","Ani","Paijo"]
// console.log(h.join("-"))

// let i = ["Anton","Budi","Ani","Paijo"]
// let i2 = i.slice(0).sort().reverse()
// console.log(i2)

// let arr1 = [["apel","mangga"], "mouse", "keyboard"]
arr2 = arr1.slice([0],[1])
// console.log(arr2)

let j = [[1,2], [3,4],[5,6,8], 7, 8]
// how to get 5 ?
console.log(j[2][0],j[2][1])
// console.log(j.slice(2,))

