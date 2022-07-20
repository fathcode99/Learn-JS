// SYNTAX FUNCTION
// FUNCTION DECLARATION
function myFunction() {
    console.log("ini Function Declaration")
}

// FUNCTION EXPRESSION
let myFunction2 = function() {
    console.log(`Ini function Expression`)
}

// FUNCTION EXPRESSION WITH ARROW FUNCTION " => "
let myFunction3 = () => {
    console.log(`Arrow Function`)
}


// CALL FUNCTION
myFunction()
myFunction2()
myFunction3()

// 
let greeting = () => {
    let name1 = 'Anton '
    let name2 = 'Andi'
    let namaLengkap = name1 + name2

    return namaLengkap
}

console.log(greeting())

// WITH PARAMETER
let hello = (a,b) => {
    console.log(`Hello ${a+b}`)
}
hello(`Yusuf `, `Hilman`)

let hello2 = (b,a) => {
    console.log(`Hello ${a+b}`)
}
hello2(`Yusuf `, `Hilman `)

// RETURN
// Return digunakan ketika kita mau memakai sebuah hasil dari function
// Return juga untuk menghentikan proses dari si function
let number1 = () => {
    let a = 2**2
    return a
}

let number2 = () => {
    let b = 3**2
    return b
}
console.log(number1() + number2())

// PARAMETER AND RETURN
let sum = (input1, input2) => {
    return input1 + input2
}
console.log(sum(5,2))

// PARAMTER AND ARGUMENT
// Parameter => itu adalah variabel yang kita buat saat MEMBUAT FUNCTION
// Argument => itu adalah value yang kita buat saat MEMANGGIL FUNCTION

// DEFAULT PARAMETER
let sum2 = (a, b, c = 5) => {
    return a+b+c
}
console.log(sum2(10,5)) //Jika argumen hanya di isi 2, maka c bernilai default = 5

let sum3 = (a, b, c = 5) => {
    return a+b+c
}
console.log(sum3(10,5,1)) //Jika argument diisi 3 maka nilai c mengikuti nilai argument

// CALLBACK FUNCTION
let minus = (a,b) => {
    return a-b
}
let angka = () => {
    return 10
}
// ketika function di masukan dalam argument, maka itu adalah CALLBACK Function
console.log(minus(20, angka()))

// CALLING OTHER FUNCTION
let addition = (a, b) => {
    return a + b
}

let substraction = (a, b) => {
    return a - b
}

let multiplication = (a,b) => {
    return a + b
}

let division = (a,b) => {
    return a/b
}

let showResult = (a, b) => {
    console.log(addition(a,b))
    console.log(substraction(a,b))
    console.log(multiplication(a, b))
    console.log(division(a, b))
}

showResult(10,5)

// RECURSIVE FUNCTION
// Function untuk memanggil dirinya sendiri
let countdown = (counter) => {
    console.log(counter)
    counter--
    if(counter >= 0) {
        countdown(counter)
    }
}

countdown(3)