// parameter => value yg di buthkan oleh function
// argument => value yg di kirim ketika sebuah function di panggil

// Example 
let greeting = (name) => {
    console.log(`Hello ${name}`)
}
greeting('Fath') // Fath adalah argument

// //////////////////////////////////
// return => untuk mengeluarkan sebuah value dari sebuah function dan menghentikan sebuah function

let sum = (a, b) => {
    return a + b
}
console.log(sum(2,3))

// FIBONACCI
// 1,1,2,3,5,8,13
let fibo = (x) => {
    let arr = [1,1]
    for (let i = 0; i < x -2 ; i++) {
        arr.push(arr[i] + arr[i+1])
    }
    console.log(arr[x-1])
}

fibo(10)

// PALINDROME => untuk melihat apakah sebuah kata ketika di balik hasilnya sama atau nggak
let palindrome = (str) => {
    var lowRegStr = str.toLowerCase().replace(/[\W_]/g, ''); //regex => utk menghilangkan semua simbol koma, spasi, dll. hasilnya = racecar
    var reverseStr = lowRegStr.split('').reverse().join(''); // split = [`r`, `a`, `c`, `e`, `c`, `a`, `r`]
    console.log(reverseStr === lowRegStr);
}
palindrome("RaCe CaR")

// 3M = MEAN, MEDIAN, MODUS
let arr = [1,2,3,2,5,2,7,2]

let mean = (arr) => {
    let sum = arr.reduce((a, b) => a + b)
    console.log(sum / arr.length)
}

let median = (arr) => {
    let sortArr = arr.sort()

    let res 
    if (sortArr.length%2 !== 0) {
        let ind = Math.round(sortArr.length/2)-1
        res = arr[ind]
    } else {
        let ind = (sortArr.length/2)
        res = (sortArr[ind -1] + sortArr[ind]) /2
    }
    console.log(res)
}

let mode = (arr) => {
    let total = 0 
    let res 
    arr.forEach(element => {
        let count = 0
        arr.forEach(item => {
            if (element=== item) count++
        })
        if (count > total) {
            total = count
            res = element
        }
    });
    console.log(res)
}

mean(arr)
median(arr)
mode(arr)

// ReverseClone => membuat fiture reverse sendiri seperti yg ada di Javascript
// di urutkan dulu baru di reverse

let arr2 = [4,2,1,5,3]

let revClone = (input) => {
    let res = input 
    let a 
    for(let i = 0 ; i < res.length; i++){
        for (let j = 0; j < res.length; j++){
            if(res [j] < res [j+1]) {
                a = res[j]
                res[j] = res [j+1]
                res[j+1] = a
            }
        }
    }
    return res
}

console.log(revClone(arr2))